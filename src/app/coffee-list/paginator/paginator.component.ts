import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {PageModel} from "../../model/state.model";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {

  @Input()
  set paginator(page: any) {
    this.pageSize = new Array(page.totalPages).fill('').map((el, i) => i + 1);
    this.paginatorData = page;
  }

  @Output()
  onPageChanged: EventEmitter<number> = new EventEmitter<number>();

  public pageSize: number[];
  public paginatorData: PageModel;

  public setPage(pageNumber: number) {
    this.onPageChanged.emit(pageNumber);
    console.log(pageNumber)
  }
}
