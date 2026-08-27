import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mezzo-eyebrow',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p class="eyebrow">{{ text }}</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SectionEyebrowComponent {
  @Input({ required: true }) text = '';
}
