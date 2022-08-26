import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QuerySnapshot,
} from '@angular/fire/compat/firestore';
import IProject from '../models/project.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projectsCollection: AngularFirestoreCollection<IProject>;
  projects: {
    id: string;
    projects: IProject[];
  }[] = [];
  constructor(private db: AngularFirestore) {
    this.projectsCollection = db.collection('projects');
  }

  async getProjects(id: string, limit: number) {
    let query = this.projectsCollection.ref.orderBy('sort', 'asc').limit(limit);

    if (id === 'latest') {
      query = this.projectsCollection.ref.orderBy('sort', 'asc').limit(limit);
    }
    if (id === 'Websites') {
      query = this.projectsCollection.ref.where('type', '==', 'Website').limit(limit)
    }
    if(id === 'Games') {
      console.log(' hi');
      query = this.projectsCollection.ref.where('type', '==', 'Games').limit(limit)
    }
    if(id === 'Unfinished') {
      query = this.projectsCollection.ref.where('type', '==', 'Unfinished').limit(limit); 
    }
    if(id === 'Apps') {
      query = this.projectsCollection.ref.where('type', '==', 'App').limit(limit); 
    }

    const length = this.projects.find((x) => x.id === id)?.projects.length ?? 0;
    if(length != 0) {
      const lastDocID = this.projects.find((x) => x.id === id)?.projects[length - 1].docID;

      const lastDoc = await lastValueFrom(
        this.projectsCollection.doc(lastDocID).get()
      );
      query = query.startAfter(lastDoc);
    }

    const snapshot = await query.get();
    const projectHolder: IProject[] = [];

    snapshot.forEach((doc) => {
      projectHolder.push({
        docID: doc.id,
        ...doc.data(),
      });
    });

    if(length != 0) {
      projectHolder.forEach(project => {
        this.projects.find((x) => x.id === id)?.projects.push(project)
      });

    } else {
      this.projects.push({
        id,
        projects: projectHolder,
      });
    }
  }

  getProjectById(id: string) {
    const projects = this.projects.find((x) => x.id === id)?.projects;
    return projects;
  }

  unRegister(id: string) {
    this.projects = this.projects.filter((m) => m.id !== id);
  }
}
