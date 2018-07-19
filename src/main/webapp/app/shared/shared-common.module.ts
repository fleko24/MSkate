import { NgModule } from '@angular/core';

import { MegaskateManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MegaskateManagerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MegaskateManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MegaskateManagerSharedCommonModule {}
