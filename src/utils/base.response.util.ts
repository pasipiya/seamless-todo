export class BaseResponseUtil {
    public async baseResponse(data: any, message: string, error_code: number) {

        const currentTimestamp = Date.now();
    
        const date = new Date(currentTimestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
        const response = {
            'data' : typeof data !== 'undefined' ? data : null,
            status: {
                'timestamp' : formattedDateTime,
                'error_code' : error_code,
                'message' : message
            }
            
        }
    
        return response;
    
    }
}


