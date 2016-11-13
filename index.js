require("./app/app.js");

    componentWillReceiveProps(nextProps){
        const {props} = this,
        {dispatch, params} = nextProps;
        if(/*ваше рішення оновлення данних */){
        MyComponent.fetchData({dispatch, params, props});
    }
    }
    render(){
              return(
                    <div>
                    {/*ваш jsx*/}
                       </div>
            )
          }
    }
export default MyComponent;
