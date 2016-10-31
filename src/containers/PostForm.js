import React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {validate, asyncValidate} from '../helpers/formValidate';

class AddPost extends Component {
    renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <div  className="form-group">
            <label>{label}</label>
            <div>
                <input
                    className="form-control"
                    {...input} placeholder={label} type={type}/>
                {touched && ((error && <div className="alert alert-danger">{error}</div>))}
            </div>
        </div>
    );
    render(){
        const {error, handleSubmit, submitText, reset, deletePost} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="title" component={this.renderField} label="Заголовок"/>
                <Field name="text" component={this.renderField} label="Текст"/>
                <div className="btn-group">
                    <button className="btn btn-warning" type="button" onClick={reset}>Очистить форму</button>
                    {deletePost ?
                        <button className="btn btn-danger" type="button" onClick={deletePost}>Удалить статью</button>
                        : null}
                    <button className="btn btn-primary" type="submit">{submitText}</button>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
            </form>
        );
    }
}
AddPost = reduxForm({
    form: 'post', // a unique name for this form
    validate,
    asyncValidate,
    asyncBlurFields: [ 'title' ]
})(AddPost);

export default AddPost;