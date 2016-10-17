import React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddPost extends Component {
    render(){
        const {handleSubmit, submitText, reset, deletePost} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок</label>
                    <Field
                        className="form-control"
                        name="title" component="input" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Текст</label>
                    <Field
                        className="form-control"
                        name="text" component="input" type="text"/>
                </div>
                <div className="btn-group">
                    <button className="btn btn-warning" type="button" onClick={reset}>Очистить форму</button>
                    {deletePost ?
                        <button className="btn btn-danger" type="button" onClick={deletePost}>Удалить статью</button>
                        : null}
                    <button className="btn btn-primary" type="submit">{submitText}</button>
                </div>
            </form>
        );
    }
}
AddPost = reduxForm({
    form: 'post' // a unique name for this form
})(AddPost);

export default AddPost;