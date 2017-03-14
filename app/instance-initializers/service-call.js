/**
 * <p>
 * service-call call service start method 
 * </p>
 *
 * @class service-call 
 */
import config from '../config/environment';

export function initialize(app) {
    let service = app.lookup("service:service");
    service.start();  
}

export default {
    name: 'service-call',
    initialize
};
