import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/shared/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  theme: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  pageWidth: string;

  constructor(
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {
    this.settingsService.theme$.subscribe(theme => this.theme = theme);
    this.settingsService.fontFamily$.subscribe(fontFamily => this.fontFamily = fontFamily);
    this.settingsService.fontSize$.subscribe(fontSize => this.fontSize = fontSize);
    this.settingsService.fontWeight$.subscribe(fontWeight => this.fontWeight = fontWeight);
    this.settingsService.lineHeight$.subscribe(lineHeight => this.lineHeight = lineHeight);
    this.settingsService.pageWidth$.subscribe(pageWidth => this.pageWidth = pageWidth);
  }

  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }

  changeFontFamily(fontFamily: string) {
    this.settingsService.changeFontFamily(fontFamily);
  }

  changeFontSize(fontSize: string) {
    this.settingsService.changeFontSize(fontSize);
  }

  changeFontWeight(fontWeight: string) {
    this.settingsService.changeFontWeight(fontWeight);
  }

  changeLineHeight(lineHeight: string) {
    this.settingsService.changeLineHeight(lineHeight);
  }

  changePageWidth(pageWidth: string) {
    this.settingsService.changePageWidth(pageWidth);
  }

}