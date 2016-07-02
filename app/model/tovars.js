import query from 'mysql-query-promise';

const tovarsModel  = {};


tovarsModel.getAdminUser = function(id) {

    let qs = 'SELECT * FROM admin_user';

    return  query(qs, 'master');
    
}

export default tovarsModel;