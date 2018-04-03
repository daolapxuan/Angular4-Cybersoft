import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot} from '@angular/router';


@Injectable()

export class ProtectService implements CanActivate {

  constructor(private r: Router) { }

  canActivate(ActivatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    // Kiểm tra quyền nếu true
    if (localStorage.getItem("isAdmin") === 'admin') {
      return true;
    }
    else {
      this.r.navigate(["PageNotFound"]);
    }

    return false;
  }

}
