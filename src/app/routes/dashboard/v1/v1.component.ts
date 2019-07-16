import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { _HttpClient, MenuService } from '@delon/theme';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardV1Component implements OnInit, OnDestroy {
  navigationSubscription: any;

  todoData: any[] = [
    {
      completed: true,
      avatar: '1',
      name: '苏先生',
      content: `请告诉我，我应该说点什么好？`,
    },
    {
      completed: false,
      avatar: '2',
      name: 'はなさき',
      content: `ハルカソラトキヘダツヒカリ`,
    },
    {
      completed: false,
      avatar: '3',
      name: 'cipchk',
      content: `this world was never meant for one as beautiful as you.`,
    },
    {
      completed: false,
      avatar: '4',
      name: 'Kent',
      content: `my heart is beating with hers`,
    },
    {
      completed: false,
      avatar: '5',
      name: 'Are you',
      content: `They always said that I love beautiful girl than my friends`,
    },
    {
      completed: false,
      avatar: '6',
      name: 'Forever',
      content: `Walking through green fields ，sunshine in my eyes.`,
    },
  ];

  webSite: any[];
  salesData: any[];
  offlineChartData: any[];

  constructor(
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router,
    public menuService: MenuService,
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.menuService.resume();
  }

  ngOnInit() {
    this.menuService.resume();
    // this.http.get('chart').subscribe((res: any) => {
    //   this.webSite = res.visitData.slice(0, 10);
    //   this.salesData = res.salesData;
    //   this.offlineChartData = res.offlineChartData;
    //   this.cdr.detectChanges();
    // });
  }
  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
