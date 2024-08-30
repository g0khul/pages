import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ClassDirective, TimesDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the park',
      url: 'https://images.unsplash.com/photo-1622050956578-94fd044a0ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFya3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the theatre',
      url: 'https://images.unsplash.com/photo-1621976498727-9e5d56476276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhdHJlfGVufDB8fDB8fHww',
    },
    {
      title: 'At the pool',
      url: 'https://images.unsplash.com/photo-1484791984053-c4abb3fd681b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9vbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the hotel',
      url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the park',
      url: 'https://images.unsplash.com/photo-1622050956578-94fd044a0ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFya3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the theatre',
      url: 'https://images.unsplash.com/photo-1621976498727-9e5d56476276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhdHJlfGVufDB8fDB8fHww',
    },
    {
      title: 'At the pool',
      url: 'https://images.unsplash.com/photo-1484791984053-c4abb3fd681b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9vbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the hotel',
      url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the park',
      url: 'https://images.unsplash.com/photo-1622050956578-94fd044a0ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFya3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the theatre',
      url: 'https://images.unsplash.com/photo-1621976498727-9e5d56476276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhdHJlfGVufDB8fDB8fHww',
    },
    {
      title: 'At the pool',
      url: 'https://images.unsplash.com/photo-1484791984053-c4abb3fd681b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9vbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the hotel',
      url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the park',
      url: 'https://images.unsplash.com/photo-1622050956578-94fd044a0ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFya3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the theatre',
      url: 'https://images.unsplash.com/photo-1621976498727-9e5d56476276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhdHJlfGVufDB8fDB8fHww',
    },
    {
      title: 'At the pool',
      url: 'https://images.unsplash.com/photo-1484791984053-c4abb3fd681b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9vbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the hotel',
      url: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww',
    },
  ];

  getPaginationWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
