import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery: string = '';
  dummyData: string[] = [
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'GraphQL'
  ];
  
  filteredData: string[] = [];
  
  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.searchQuery = target.value;
      if (this.searchQuery) {
        this.filteredData = this.dummyData.filter(item => 
          item.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredData = [];
      }
    }
  }
  
  highlightText(item: string): string {
    if (!this.searchQuery) {
      return item;
    }
    
    const regex = new RegExp(`(${this.searchQuery})`, 'gi');
    return item.replace(regex, `<mark>$1</mark>`);
  }
  
  onListItemClick(event: Event) {
    console.log(event.target);
  }
}
