import query from 'mysql-query-promise';

const autoModel  = {};


autoModel.getAuto = function(find_obj) {

    let qs = 'SELECT c.id, pma.value AS marka, pmo.value AS model, count(cp.id) AS countPhotoPickup  FROM cars c ' +
             'INNER JOIN cars_photo cp ON cp.car_id=c.id '+
             'INNER JOIN podbor_marka pma ON pma.marka_id=c.marka_id '+
             'INNER JOIN podbor_model pmo ON pmo.model_id=c.model_id '+
             'WHERE c.active!=2 ';

    let params = [];

    if (find_obj.marka_id){
        qs += ' AND c.marka_id=?';
        params.push(find_obj.marka_id);
    }

    if (find_obj.model_id){
        qs += ' AND c.model_id=?';
        params.push(find_obj.model_id);
    }

    if (find_obj.year_id){
        qs += ' AND c.year_id=?';
        params.push(find_obj.year_id);
    }

    if (find_obj.auto_body_id){
        qs += ' AND c.auto_body_id=?';
        params.push(find_obj.auto_body_id);
    }

    qs += ' GROUP BY c.id ORDER BY c.name';

    return  query(qs, params, 'master');
    
};

export default autoModel;