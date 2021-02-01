
export interface BasicResult<T> {
    message ?: string; 
    success ?: boolean; 
    entity ?: T[];
}