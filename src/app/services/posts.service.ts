import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs";
import firebase from "firebase/compat";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  loadFeaturedData() {
    return this.afs.collection('posts', ref =>
    ref.where('isFeatured', '==', true)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id
        const data = a.payload.doc.data()
        return {id, data}
      }))
    )
  }

  loadAllData() {
    return this.afs.collection('posts').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id
        const data = a.payload.doc.data()
        return {id, data}
      }))
    )
  }

  loadLatest() {
    return this.afs.collection('posts', ref =>
      ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id
        const data = a.payload.doc.data()
        return {id, data}
      }))
    )
  }

  loadLatest4() {
    return this.afs.collection('posts', ref =>
      ref.orderBy('createdAt').limit(4)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id
        const data = a.payload.doc.data()
        return {id, data}
      }))
    )
  }

  loadCategoryIdPosts(categoryId: string) {
    return this.afs.collection('posts', ref =>
      ref.where('category.categoryId', '==', categoryId)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id
        const data = a.payload.doc.data()
        return {id, data}
      }))
    )
  }

  loadCategoryNamePosts(categoryName: string) {
    return this.afs.collection('posts', ref =>
      ref.where('category.category', '==', categoryName)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id
        const data = a.payload.doc.data()
        return {id, data}
      }))
    )
  }

  loadOnePostData(id: string) {
    return this.afs.doc(`posts/${id}`).valueChanges()
  }

  addViews(id: string, views: number) {
    const viewsCount = {
      views: views
    }

    this.afs.doc(`posts/${id}`).update(viewsCount)
  }
}
