import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFilterProductComponent } from './sidebar-filter-product.component';

describe('SidebarFilterProductComponent', () => {
  let component: SidebarFilterProductComponent;
  let fixture: ComponentFixture<SidebarFilterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarFilterProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFilterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
