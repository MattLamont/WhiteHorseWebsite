import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListingViewComponent } from './blog-listing-view.component';

describe('BlogListingViewComponent', () => {
  let component: BlogListingViewComponent;
  let fixture: ComponentFixture<BlogListingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
