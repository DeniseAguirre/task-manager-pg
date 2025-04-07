import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import supertest from 'supertest';
import { AppModule } from './../src/app.module';
import { DataSource } from 'typeorm';
import { Express } from 'express';

describe('TasksController (e2e)', () => {
  let app: INestApplication;
  let dataSource: DataSource;
  let httpServer: Express;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.init();

    dataSource = app.get(DataSource);
    await dataSource.synchronize(true);

    httpServer = app.getHttpServer() as Express;
  });

  afterAll(async () => {
    await app.close();
  });

  let createdTaskId: string;

  type TaskResponse = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  };

  it('POST /api/tasks - debe crear una tarea', async () => {
    const response = await supertest(httpServer)
      .post('/api/tasks')
      .send({
        title: 'Test Task',
        description: 'Task description',
      })
      .expect(201);

    const body = response.body as TaskResponse;

    expect(body).toHaveProperty('id');
    expect(body.title).toBe('Test Task');
    expect(body.description).toBe('Task description');
    expect(body.completed).toBe(false);
    expect(typeof body.createdAt).toBe('string');
    expect(typeof body.updatedAt).toBe('string');

    createdTaskId = body.id;
  });

  it('GET /api/tasks - debe devolver una lista de tareas', async () => {
    const response = await supertest(httpServer).get('/api/tasks').expect(200);
    const body = response.body as TaskResponse[];

    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
  });

  it('GET /api/tasks/:id - debe devolver la tarea creada', async () => {
    const response = await supertest(httpServer).get(`/api/tasks/${createdTaskId}`).expect(200);

    const body = response.body as TaskResponse;

    expect(body.id).toBe(createdTaskId);
    expect(body).toHaveProperty('title');
  });

  it('PUT /api/tasks/:id - debe actualizar la tarea', async () => {
    const response = await supertest(httpServer)
      .put(`/api/tasks/${createdTaskId}`)
      .send({ completed: true })
      .expect(200);

    const body = response.body as TaskResponse;

    expect(body.completed).toBe(true);
  });

  it('DELETE /api/tasks/:id - debe eliminar la tarea', async () => {
    await supertest(httpServer).delete(`/api/tasks/${createdTaskId}`).expect(204);
  });

  it('GET /api/tasks/:id - debe retornar 404 al buscar una tarea eliminada', async () => {
    await supertest(httpServer).get(`/api/tasks/${createdTaskId}`).expect(404);
  });
});
