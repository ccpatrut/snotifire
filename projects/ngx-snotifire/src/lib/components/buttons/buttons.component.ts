import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NotifireModel } from '../toast/notifire-toast.model';
import { SnotificationService } from '../../services';

@Component({
  selector: 'notifire-button',
  templateUrl: './buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
/**
 * Buttons component
 */
export class ButtonsComponent {
  /**
   * Get buttons Array
   */
  @Input() toast!: NotifireModel;

  constructor(private readonly service: SnotificationService) {}

  /**
   * remove toast
   */
  remove() {
    this.service.remove(this.toast.id);
  }
}
