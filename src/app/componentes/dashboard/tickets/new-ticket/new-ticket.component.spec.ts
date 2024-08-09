import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketComponent } from './new-ticket.component';
import { ControlComponent } from '../../../../shared/control/control.component';

describe('NewTicketComponent', () => {
  let component: NewTicketComponent;
  let fixture: ComponentFixture<NewTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTicketComponent, ControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
