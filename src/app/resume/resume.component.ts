import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  isWorkExperienceOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Adrian Tan - Resume');
  }
  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', 'blank');
    link.setAttribute('href', '');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }
}
