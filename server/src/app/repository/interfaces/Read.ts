

interface Read<T> {
    retrieve: (callback: (error: any, result: any)=> void)=> void;
    findById: (id: any, callback: (error:any, result: T) => void) => void;
}

export = Read;