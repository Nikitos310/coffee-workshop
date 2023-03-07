import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {TableModel} from "../../model/table.model";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {

  @Input()
  model: TableModel[];

  @Input()
  data: any;

  @Input()
  showOrder: boolean = false;


  @Output()
  onSelected: EventEmitter<any> = new EventEmitter<any>();

  public rowSelected(row: any) {
    this.onSelected.emit(row);
  }
}
