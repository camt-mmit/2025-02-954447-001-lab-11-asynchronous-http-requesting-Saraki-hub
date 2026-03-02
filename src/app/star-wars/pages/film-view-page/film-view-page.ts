import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';
import { FilmView } from '../../components/film-view/film-view';
import { ModuleActivatedRoute } from '../../tokens';
import { filmResource } from '../../helpers';

@Component({
  selector: 'app-film-view-page',
  imports: [FilmView],
  templateUrl: './film-view-page.html',
  styleUrl: './film-view-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmViewPage {
readonly id = input.required<string>();

  protected moduleRoute = inject(ModuleActivatedRoute);

  protected readonly resource = filmResource(this.id).asReadonly();

  private readonly location = inject(Location);

  protected goBack(): void {
    this.location.back();
  }
}
