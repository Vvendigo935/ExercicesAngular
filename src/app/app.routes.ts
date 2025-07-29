import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Series } from './pages/series/series';

export const routes: Routes = [
    {path: "", component: Counter},
    {path: "series", component: Series}
];
