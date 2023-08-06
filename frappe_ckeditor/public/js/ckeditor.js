frappe.ui.form.ControlTextEditor = class ControlTextEditor extends frappe.ui.form.ControlCode {
    make_wrapper() {
        super.make_wrapper();
    }

    make_input() {
        this.has_input = true;
        this.make_quill_editor();
    }

    make_quill_editor() {
        const that = this
        that.quill_container = $('<div>').appendTo(this.input_area);
        that.editorInstance = CKEDITOR.replace(that.quill_container[0]);

        that.editorInstance.on('change', () => {
            that.set_input(that.editorInstance.getData());
        });
    }

    set_formatted_input(value) {
        if (this.frm && this.editorInstance) {
            // console.log(this.editorInstance.getData());
            // console.log(this.format_for_input(value));
            // if (value === this.get_input_value()) return;
            this.editorInstance.setData(this.format_for_input(value));
        }
    }

    get_input_value() {
        return this.editorInstance ? this.editorInstance.getData() : '';
    }


    // set_formatted_input(value) {
    //     if (this.editorInstance) {
    //         if (this.frm && this.editorInstance && !this.frm.doc.__setContent) {
    //             this.editorInstance.setData(value);
    //             // this.editorInstance.setContent(value);
    //         }
    //         this.frm.doc.__setContent = 1
    //     }
    // }


}
