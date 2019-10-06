import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  pinnedRepos;

  constructor(private http: HttpClient) { }


    loadPinnedRepos(): Observable<Object[]> {
      return of([
        {
          name: "clarity",
          url: "https://github.com/vmware/clarity",
          resourcePath: "/vmware/clarity",
          description:
            "UX guidelines, HTML/CSS framework, and Angular components working together to craft exceptional experiences"
        },
        {
          name: "photon",
          url: "https://github.com/vmware/photon",
          resourcePath: "/vmware/photon",
          description: "Minimal Linux container host"
        },
        {
          name: "pyvmomi",
          url: "https://github.com/vmware/pyvmomi",
          resourcePath: "/vmware/pyvmomi",
          description: "VMware vSphere API Python Bindings"
        },
        {
          name: "govmomi",
          url: "https://github.com/vmware/govmomi",
          resourcePath: "/vmware/govmomi",
          description: "Go library for the VMware vSphere API"
        },
        {
          name: "open-vm-tools",
          url: "https://github.com/vmware/open-vm-tools",
          resourcePath: "/vmware/open-vm-tools",
          description: "Official repository of VMware open-vm-tools project"
        },
        {
          name: "octant",
          url: "https://github.com/vmware/octant",
          resourcePath: "/vmware/octant",
          description:
            "A web-based, highly extensible platform for developers to better understand the complexity of Kubernetes clusters."
        }
      ]);
    }
}
