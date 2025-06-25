import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FileService {
    constructor(private http: HttpClient) { }

    downloadFile(url: string): Observable<Blob> {
        return this.http.get(url, { responseType: 'blob' });
    }

    download(url: string) {
        this.downloadFile(url).subscribe((blob) => {
            const a = document.createElement('a');
            const objectUrl = URL.createObjectURL(blob);
            a.href = objectUrl;
            a.target = "_blank"
            a.click();
            URL.revokeObjectURL(objectUrl);
        });
    }


    downloadLocal(url: string) {
        const a = document.createElement('a');
        a.href = url;
        a.target = "_blank"
        a.click();
    }
}