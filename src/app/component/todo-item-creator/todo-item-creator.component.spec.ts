import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemCreatorComponent } from './todo-item-creator.component';

describe('TodoItemCreatorComponent', () => {
  let component: TodoItemCreatorComponent;
  let fixture: ComponentFixture<TodoItemCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
