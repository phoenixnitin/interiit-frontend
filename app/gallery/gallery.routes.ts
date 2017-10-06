import {Routes, RouterModule} from '@angular/router';

import {ImageGalleryComponent} from './ImageGallery/image.gallery.component';
import {VideoGalleryComponent} from './VideoGallery/video.gallery.component';

export const GALLERY_ROUTES: Routes = [
    {path: '', redirectTo: 'image', pathMatch: 'full'},
    {path: 'image', component: ImageGalleryComponent},
    {path: 'video', component: VideoGalleryComponent},
];