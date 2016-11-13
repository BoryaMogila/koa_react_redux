require("./app/app.js");

import SeoComponent from './SeoComponent'

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
                  <SeoComponent seo= {/* об'єкт з SEO данними*/}/>
                  {/*ваш jsx*/}
                </div>
           )
         }
   }
export default connect()(MyComponent);
