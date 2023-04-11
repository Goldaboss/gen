import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {

  public formControl = new FormControl();
  private destroyed$ = new Subject<void>();
  @Output() searchValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.formControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroyed$)
    )
      .subscribe((value) => {
        this.searchValue.emit(value)
      })
  }
}
