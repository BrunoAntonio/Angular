import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let injector: TestBed;
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });

    injector = getTestBed();
    service = injector.inject(HttpService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('get - should return a mock response', () => {
    const dummyTodoLists = [
      {
        name: 'todoList1',
        listItems: [
          { id: 1, description: 'listitem1-1', done: false },
          { id: 2, description: 'listitem1-2', done: false },
        ],
      },
      {
        name: 'todoList2',
        listItems: [
          { id: 2, description: 'listitem2-1', done: false },
          { id: 4, description: 'listitem2-2', done: false },
        ],
      },
    ];

    service.httpGetService().subscribe((todoLists) => {
      expect(todoLists.body.length).toBe(2);
      expect(todoLists.body).toEqual(dummyTodoLists);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyTodoLists);
  });

  it('post - should return a mock response', () => {
    const dummyTodoLists = { body: 'postBody', title: 'postTitle', userId: 1 };

    service.httpPostService(
      dummyTodoLists.title,
      dummyTodoLists.body,
      dummyTodoLists.userId
    );

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts'
    );
    expect(req.request.method).toBe('POST');
    req.flush(dummyTodoLists);
    expect(req.request.body).toEqual(dummyTodoLists);
  });
});
