import { NgModule } from '@angular/core';

import { MskateSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MskateSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MskateSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MskateSharedCommonModule {}
