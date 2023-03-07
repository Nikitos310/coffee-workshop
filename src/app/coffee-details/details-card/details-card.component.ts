import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {CoffeeModel} from "../../model/coffee.model";

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsCardComponent {

  @Input()
  public data: CoffeeModel;
}
