import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Properties } from '../../interfaces/z-loader-interface';



@Injectable({
  providedIn: 'root'
})
export class ZToastrService {
  // property for toastr.
  config: Properties = {
    progressBar: true,
    tapToDismiss: true,
    closeButton: true,
    positionClass: 'toast-bottom-right',
  }
  constructor(private toastr: ToastrService) { }

  // Method as according to the toastr type user can use these methods where they want to use and just need to pass the tile and message.
  showSuccess(message: string, title: string) {
    this.toastr.success(message, title, this.config);
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title, this.config);
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title, this.config);
  }

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title, this.config);
  }
}
