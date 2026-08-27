import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesPipelineComponent } from './components/services-pipeline/services-pipeline.component';
import { InbuildSystemComponent } from './components/inbuild-system/inbuild-system.component';
import { SustainabilityPanelComponent } from './components/sustainability-panel/sustainability-panel.component';
import { PortfolioGalleryComponent } from './components/portfolio-gallery/portfolio-gallery.component';
import { BenefitsGridComponent } from './components/benefits-grid/benefits-grid.component';
import { ImpactSectionComponent } from './components/impact-section/impact-section.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';

@Component({
  selector: 'mezzo-landing',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroComponent,
    AboutSectionComponent,
    ServicesPipelineComponent,
    InbuildSystemComponent,
    SustainabilityPanelComponent,
    PortfolioGalleryComponent,
    BenefitsGridComponent,
    ImpactSectionComponent,
    SiteFooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
