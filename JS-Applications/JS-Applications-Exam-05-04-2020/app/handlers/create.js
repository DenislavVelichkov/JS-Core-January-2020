import {applyCommon} from './common.js';
import {createFormEntity} from '../utils/formData.js';
import {requester} from '../services/authService.js';

export async function createAssetHandler() {

    await applyCommon.call(this);

    await this.partial('./templates/create/createPage.hbs');

    let formRef = document.querySelector('.container form');
    formRef.addEventListener('submit', async e => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['title', 'category', 'content']);
        let formValue = form.getValue();

        formValue.createdByName = sessionStorage.getItem('email');

        await requester.asset.createEntity(formValue);
        toastr.success("Article created successfully.");

        form.clear();

        this.redirect(['#/home']);
    });
}

export async function editHandler() {
    /**
     * Load hbs templates
     */
    await applyCommon.call(this);
    await this.partial('./templates/edit/editPage.hbs');

    /**
     * Handling form events part
     */
    let formRef = document.querySelector('form');
    let form = createFormEntity(formRef, ['title', 'category', 'content']);

    /**
     * Load and set the initial form value for edit
     */
    const articleToEdit = await requester.asset.getById(this.params.id);
    form.setValue(articleToEdit);

    formRef.addEventListener('submit', async e => {
        e.preventDefault();
        let form = createFormEntity(formRef, ['title', 'category', 'content']);
        let formValue = form.getValue();

        toastr.success("Article edited successfully.");

        await requester.asset.patchEntity(formValue, this.params.id);

        this.redirect(['#/home']);
    });
}
