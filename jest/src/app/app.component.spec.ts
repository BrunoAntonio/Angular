import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  let mockService: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should make a sum', () => {
    expect(app.sum(1, 2)).toBe(3);
  });

  it('should update after ngOnInit', () => {
    mockService = [
      { sigla: 'Te', nome: 'Teste' },
      { sigla: 'Te', nome: 'Teste' },
    ];

    const httpService = TestBed.inject(HttpService);
    jest.spyOn(httpService, 'httpGetService').mockReturnValue(of(mockService));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.appName).toBe('After ngOnInit');
      expect(app.postsArray.length).toBe(2);
    });
  });
});
