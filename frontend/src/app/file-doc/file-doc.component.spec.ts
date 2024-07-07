import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDocComponent } from './file-doc.component';

describe('FileDocComponent', () => {
  let component: FileDocComponent;
  let fixture: ComponentFixture<FileDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
