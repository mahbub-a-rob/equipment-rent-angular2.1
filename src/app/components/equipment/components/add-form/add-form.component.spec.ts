import { EquipmentListService, ItemModel, AddFormComponent } from '../../index';

import { HTTP_PROVIDERS } from '@angular/http';
import { inject, addProviders } from '@angular/core/testing';
import { provide } from '@angular/core';
import { FormBuilder } from '@angular/forms'

describe('AddFormComponent:', () => {
    beforeEach(() => {
        addProviders([
            AddFormComponent,
            HTTP_PROVIDERS,
            provide(EquipmentListService, {useFactory: () => {
                return {
                    addToCollection: () => {},
                    collection: [],
                    formActivated: true
                }
            }}),
            provide(FormBuilder, {})
        ])
    })

    it('should call addToCollection method when submited', 
        inject([AddFormComponent, EquipmentListService],
        (component: AddFormComponent, service: EquipmentListService) => {
            spyOn(service, 'addToCollection');
            component.onSubmit('New Item');
            expect(service.addToCollection).toHaveBeenCalled();
        })
    )

    it('form should be disactivated after submit', 
        inject([AddFormComponent, EquipmentListService],
        (component: AddFormComponent, service: EquipmentListService) => {
            component.onSubmit('New Item');
            expect(service.formActivated).not.toBe(true);   
        })
    )
})