class DBHelper{static get DATABASE_URL(){return"http://localhost:1337/restaurants"}static fetchRestaurants(t){let e=new XMLHttpRequest;e.open("GET",DBHelper.DATABASE_URL),e.onload=(()=>{if(200===e.status){const a=JSON.parse(e.responseText);a.restaurants;t(null,a)}else{const a=`Request failed. Returned status of ${e.status}`;t(a,null)}}),e.send()}static fetchRestaurantById(t,e){DBHelper.fetchRestaurants((a,r)=>{if(a)e(a,null);else{const a=r.find(e=>e.id==t);a?e(null,a):e("Restaurant does not exist",null)}})}static fetchRestaurantByCuisine(t,e){DBHelper.fetchRestaurants((a,r)=>{if(a)e(a,null);else{const a=r.filter(e=>e.cuisine_type==t);e(null,a)}})}static fetchRestaurantByNeighborhood(t,e){DBHelper.fetchRestaurants((a,r)=>{if(a)e(a,null);else{const a=r.filter(e=>e.neighborhood==t);e(null,a)}})}static fetchRestaurantByCuisineAndNeighborhood(t,e,a){DBHelper.fetchRestaurants((r,s)=>{if(r)a(r,null);else{let r=s;"all"!=t&&(r=r.filter(e=>e.cuisine_type==t)),"all"!=e&&(r=r.filter(t=>t.neighborhood==e)),a(null,r)}})}static fetchNeighborhoods(t){DBHelper.fetchRestaurants((e,a)=>{if(e)t(e,null);else{const e=a.map((t,e)=>a[e].neighborhood),r=e.filter((t,a)=>e.indexOf(t)==a);t(null,r)}})}static fetchCuisines(t){DBHelper.fetchRestaurants((e,a)=>{if(e)t(e,null);else{const e=a.map((t,e)=>a[e].cuisine_type),r=e.filter((t,a)=>e.indexOf(t)==a);t(null,r)}})}static urlTextForRestaurant(t){return`View Details For ${t.name}`}static urlForRestaurant(t){return`./restaurant.html?id=${t.id}`}static imageUrlForRestaurant(t){return`/img/${t.photograph}.jpg`}static imageTextForRestaurant(t){return`${t.name}`}static ratingForRestaurant(t){let e=0,a=0;return t.reviews.map(t=>{e++,a+=parseInt(t.rating)}),Math.round(a/e)}static imageSrcSetForRestaurant(t){return`/img/${t.photograph}_1x.jpg 1x, /img/${t.photograph}_2x.jpg 2x`}static mapMarkerForRestaurant(t,e){const a=new L.marker([t.latlng.lat,t.latlng.lng],{title:t.name,alt:t.name,url:DBHelper.urlForRestaurant(t)});return a.addTo(newMap),a}}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiaGVscGVyLmpzIl0sIm5hbWVzIjpbIkRCSGVscGVyIiwiREFUQUJBU0VfVVJMIiwiW29iamVjdCBPYmplY3RdIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbmxvYWQiLCJzdGF0dXMiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwicmVzdGF1cmFudHMiLCJlcnJvciIsInNlbmQiLCJpZCIsImZldGNoUmVzdGF1cmFudEJ5SWQiLCJmZXRjaFJlc3RhdXJhbnRzIiwiZmluZCIsInIiLCJyZXN0YXVyYW50IiwiY3Vpc2luZSIsImZldGNoUmVzdGF1cmFudEJ5Q3Vpc2luZSIsImZpbHRlciIsImN1aXNpbmVfdHlwZSIsInJlc3VsdHMiLCJuZWlnaGJvcmhvb2QiLCJmZXRjaFJlc3RhdXJhbnRCeU5laWdoYm9yaG9vZCIsImZldGNoUmVzdGF1cmFudEJ5Q3Vpc2luZUFuZE5laWdoYm9yaG9vZCIsIm5laWdoYm9yaG9vZHMiLCJtYXAiLCJ2IiwiaSIsImluZGV4T2YiLCJ1bmlxdWVOZWlnaGJvcmhvb2RzIiwiY3Vpc2luZXMiLCJ1bmlxdWVDdWlzaW5lcyIsIm5hbWUiLCJwaG90b2dyYXBoIiwicmV2aWV3cyIsInRvdGFsIiwiaXRlbSIsInBhcnNlSW50IiwicmF0aW5nIiwibWFya2VyIiwiTCIsImxhdGxuZyIsImxhdCIsImxuZyIsInRpdGxlIiwiYWx0IiwibWFwTWFya2VyRm9yUmVzdGF1cmFudCIsInVybCIsInVybEZvclJlc3RhdXJhbnQiXSwibWFwcGluZ3MiOiJNQUdNQSxTQU1KQywwQkFFRSxNQUFRLG9DQU1WQyx3QkFBd0JDLEdBQ3RCLElBQUlDLEVBQU0sSUFBSUMsZUFDZEQsRUFBSUUsS0FBSyxNQUFPTixTQUFTQyxjQUN6QkcsRUFBSUcsT0FBUyxNQUNYLEdBQW1CLE1BQWZILEVBQUlJLE9BQWdCLENBQUUsTUFBQUMsRUFBQUMsS0FBQUMsTUFBQVAsRUFBQVEsY0FDTkQsRUFBTVAsWUFDeEJELEVBQU1VLEtBQUFBLE9BQ05WLENBSEYsTUFJT1csd0NBQUFWLEVBQUFJLFNBQUVMLEVBQUFXLEVBQUEsU0FHUlYsRUFBQVcsT0FRTGIsMkJBQTJCYyxFQUFJYixHQUEvQkgsU0FBT2lCLGlCQUFvQkQsQ0FBM0JGLEVBQStCWCxLQUM3QixHQUFBVyxFQUNBZCxFQUFTa0IsRUFBQUEsVUFDSEosQ0FDRlgsTUFBQUEsRUFBZ0JVLEVBQWhCTSxLQUFBQyxHQUFBQSxFQUFBSixJQUFBQSxHQURGSyxFQUdFbEIsRUFBTWtCLEtBQUFBLEdBQ1lsQixFQUFBLDRCQUFBLFNBWXhCRCxnQ0FBZ0NvQixFQUFTbkIsR0FFdkNILFNBQVNrQixpQkFBaUIsQ0FBQ0osRUFBT0QsS0FDaEMsR0FBSUMsRUFIUlgsRUFBT29CLEVBQUFBLFVBQ0wsQ0FFRSxNQUFJVCxFQUFPRCxFQUFBVyxPQUFBSixHQUFBQSxFQUFBSyxjQUFBSCxHQUNUbkIsRUFBU1csS0FBVFksTUFZTnhCLHFDQUFxQ3lCLEVBQWN4QixHQUVqREgsU0FBU2tCLGlCQUFpQixDQUFDSixFQUFPRCxLQUNoQyxHQUFJQyxFQUhSWCxFQUFPeUIsRUFBQUEsVUFDTCxDQUVFLE1BQUlkLEVBQU9ELEVBQUFXLE9BQUFKLEdBQUFBLEVBQUFPLGNBQUFBLEdBQ1R4QixFQUFTVyxLQUFUWSxNQVlOeEIsK0NBQStDb0IsRUFBU0ssRUFBY3hCLEdBRXBFSCxTQUFTa0IsaUJBQWlCLENBQUNKLEVBQU9ELEtBQ2hDLEdBQUlDLEVBSFJYLEVBQU8wQixFQUFBQSxVQUNMLENBQ0E3QixJQUFBQSxFQUFTa0IsRUFDSSxPQUFQSixJQUNGWCxFQUFTVyxFQUFUVSxPQUFBSixHQUFBQSxFQUFBSyxjQUFBSCxJQUVjVCxPQUFWYSxJQUNKQSxFQUFJSixFQUFKRSxPQUFzQkosR0FBQUEsRUFBQU8sY0FBQUEsSUFDcEJELEVBQUFBLEtBQVVBLE1BT2Z4QiwwQkFiREMsR0FxQkFILFNBQVNrQixpQkFBaUIsQ0FBQ0osRUFBT0QsS0FMcEMsR0FBQUMsRUFPTVgsRUFBU1csRUFBTyxVQUNYLENBSlQsTUFBQWdCLEVBQUFqQixFQUFBa0IsSUFBQSxDQUFBQyxFQUFBQyxJQUFBcEIsRUFBQW9CLEdBQUFOLGNBRU1iLEVBQU9nQixFQUFBTixPQUFBLENBQUFRLEVBQUFDLElBQUFILEVBQUFJLFFBQUFGLElBQUFDLEdBQ1Q5QixFQUFTVyxLQUFUcUIsTUFRSGpDLHFCQVZEQyxHQWtCQUgsU0FBU2tCLGlCQUFpQixDQUFDSixFQUFPRCxLQUxwQyxHQUFBQyxFQU9NWCxFQUFTVyxFQUFPLFVBQ1gsQ0FKVCxNQUFBc0IsRUFBQXZCLEVBQUFrQixJQUFBLENBQUFDLEVBQUFDLElBQUFwQixFQUFBb0IsR0FBQVIsY0FFTVgsRUFBT3NCLEVBQUFaLE9BQUEsQ0FBQVEsRUFBQUMsSUFBQUcsRUFBQUYsUUFBQUYsSUFBQUMsR0FDVDlCLEVBQVNXLEtBQVR1QixNQVFIbkMsNEJBVkRtQixHQVdELDBCQUFBQSxFQUFBaUIsT0FNQ3BDLHdCQUFTbUIsR0FDViw4QkFBQUEsRUFBQUwsS0FNQ2QsNkJBQVNtQixHQUNWLGNBQUFBLEVBQUFrQixpQkFNQ3JDLDhCQUEyQnFDLEdBQzVCLFNBQUFsQixFQUFBaUIsT0FNQ3BDLDJCQUEyQm1CLEdBQzVCLElBQUFtQixFQUFBLEVBT0tDLEVBQVEsRUFDWnBCLE9BTkZBLEVBQUFtQixRQUFBVCxJQUFBVyxJQU9JRixJQUNBQyxHQUFnQkUsU0FBU0QsRUFBS0UsVUFGaEN2QixLQUFXbUIsTUFBUVQsRUFBS1csR0FhMUJ4QyxnQ0FBZ0NtQixHQUhoQyxjQUFBQSxFQUFBa0IsOEJBQUFsQixFQUFBa0IsdUJBVUFyQyw4QkFBOEJtQixFQUFZVSxHQUV4QyxNQUFNYyxFQUFTLElBQUlDLEVBQUVELFFBQVF4QixFQUFXMEIsT0FBT0MsSUFBSzNCLEVBQVcwQixPQUFPRSxNQUNuRUMsTUFBTzdCLEVBQVdpQixLQUh2QmEsSUFBT0MsRUFBQUEsS0FDTEMsSUFBQXJELFNBQUFzRCxpQkFBQWpDLEtBSUVnQyxPQURBRixFQUFLOUIsTUFBQUEsUUFDQXJCIiwiZmlsZSI6ImRiaGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbW1vbiBkYXRhYmFzZSBoZWxwZXIgZnVuY3Rpb25zLlxyXG4gKi9cclxuY2xhc3MgREJIZWxwZXIge1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhYmFzZSBVUkwuXHJcbiAgICogQ2hhbmdlIHRoaXMgdG8gcmVzdGF1cmFudHMuanNvbiBmaWxlIGxvY2F0aW9uIG9uIHlvdXIgc2VydmVyLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgREFUQUJBU0VfVVJMKCkge1xyXG4gICAgY29uc3QgcG9ydCA9IDgwMDAgLy8gQ2hhbmdlIHRoaXMgdG8geW91ciBzZXJ2ZXIgcG9ydFxyXG4gICAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OjEzMzcvcmVzdGF1cmFudHNgO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYWxsIHJlc3RhdXJhbnRzLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaFJlc3RhdXJhbnRzKGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbignR0VUJywgREJIZWxwZXIuREFUQUJBU0VfVVJMKTtcclxuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHsgLy8gR290IGEgc3VjY2VzcyByZXNwb25zZSBmcm9tIHNlcnZlciFcclxuICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50cyA9IGpzb24ucmVzdGF1cmFudHM7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwganNvbik7XHJcbiAgICAgIH0gZWxzZSB7IC8vIE9vcHMhLiBHb3QgYW4gZXJyb3IgZnJvbSBzZXJ2ZXIuXHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoYFJlcXVlc3QgZmFpbGVkLiBSZXR1cm5lZCBzdGF0dXMgb2YgJHt4aHIuc3RhdHVzfWApO1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci5zZW5kKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhIHJlc3RhdXJhbnQgYnkgaXRzIElELlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaFJlc3RhdXJhbnRCeUlkKGlkLCBjYWxsYmFjaykge1xyXG4gICAgLy8gZmV0Y2ggYWxsIHJlc3RhdXJhbnRzIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50ID0gcmVzdGF1cmFudHMuZmluZChyID0+IHIuaWQgPT0gaWQpO1xyXG4gICAgICAgIGlmIChyZXN0YXVyYW50KSB7IC8vIEdvdCB0aGUgcmVzdGF1cmFudFxyXG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdGF1cmFudCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gUmVzdGF1cmFudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgZGF0YWJhc2VcclxuICAgICAgICAgIGNhbGxiYWNrKCdSZXN0YXVyYW50IGRvZXMgbm90IGV4aXN0JywgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHJlc3RhdXJhbnRzIGJ5IGEgY3Vpc2luZSB0eXBlIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaFJlc3RhdXJhbnRCeUN1aXNpbmUoY3Vpc2luZSwgY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50cyAgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmdcclxuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudHMoKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRmlsdGVyIHJlc3RhdXJhbnRzIHRvIGhhdmUgb25seSBnaXZlbiBjdWlzaW5lIHR5cGVcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gcmVzdGF1cmFudHMuZmlsdGVyKHIgPT4gci5jdWlzaW5lX3R5cGUgPT0gY3Vpc2luZSk7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmVzdGF1cmFudHMgYnkgYSBuZWlnaGJvcmhvb2Qgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudEJ5TmVpZ2hib3Job29kKG5laWdoYm9yaG9vZCwgY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGaWx0ZXIgcmVzdGF1cmFudHMgdG8gaGF2ZSBvbmx5IGdpdmVuIG5laWdoYm9yaG9vZFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXN0YXVyYW50cy5maWx0ZXIociA9PiByLm5laWdoYm9yaG9vZCA9PSBuZWlnaGJvcmhvb2QpO1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHJlc3RhdXJhbnRzIGJ5IGEgY3Vpc2luZSBhbmQgYSBuZWlnaGJvcmhvb2Qgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudEJ5Q3Vpc2luZUFuZE5laWdoYm9yaG9vZChjdWlzaW5lLCBuZWlnaGJvcmhvb2QsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyBGZXRjaCBhbGwgcmVzdGF1cmFudHNcclxuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudHMoKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSByZXN0YXVyYW50c1xyXG4gICAgICAgIGlmIChjdWlzaW5lICE9ICdhbGwnKSB7IC8vIGZpbHRlciBieSBjdWlzaW5lXHJcbiAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIociA9PiByLmN1aXNpbmVfdHlwZSA9PSBjdWlzaW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5laWdoYm9yaG9vZCAhPSAnYWxsJykgeyAvLyBmaWx0ZXIgYnkgbmVpZ2hib3Job29kXHJcbiAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIociA9PiByLm5laWdoYm9yaG9vZCA9PSBuZWlnaGJvcmhvb2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhbGwgbmVpZ2hib3Job29kcyB3aXRoIHByb3BlciBlcnJvciBoYW5kbGluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZmV0Y2hOZWlnaGJvcmhvb2RzKGNhbGxiYWNrKSB7XHJcbiAgICAvLyBGZXRjaCBhbGwgcmVzdGF1cmFudHNcclxuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudHMoKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gR2V0IGFsbCBuZWlnaGJvcmhvb2RzIGZyb20gYWxsIHJlc3RhdXJhbnRzXHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3Job29kcyA9IHJlc3RhdXJhbnRzLm1hcCgodiwgaSkgPT4gcmVzdGF1cmFudHNbaV0ubmVpZ2hib3Job29kKVxyXG4gICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gbmVpZ2hib3Job29kc1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZU5laWdoYm9yaG9vZHMgPSBuZWlnaGJvcmhvb2RzLmZpbHRlcigodiwgaSkgPT4gbmVpZ2hib3Job29kcy5pbmRleE9mKHYpID09IGkpXHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdW5pcXVlTmVpZ2hib3Job29kcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYWxsIGN1aXNpbmVzIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaEN1aXNpbmVzKGNhbGxiYWNrKSB7XHJcbiAgICAvLyBGZXRjaCBhbGwgcmVzdGF1cmFudHNcclxuICAgIERCSGVscGVyLmZldGNoUmVzdGF1cmFudHMoKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gR2V0IGFsbCBjdWlzaW5lcyBmcm9tIGFsbCByZXN0YXVyYW50c1xyXG4gICAgICAgIGNvbnN0IGN1aXNpbmVzID0gcmVzdGF1cmFudHMubWFwKCh2LCBpKSA9PiByZXN0YXVyYW50c1tpXS5jdWlzaW5lX3R5cGUpXHJcbiAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBjdWlzaW5lc1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUN1aXNpbmVzID0gY3Vpc2luZXMuZmlsdGVyKCh2LCBpKSA9PiBjdWlzaW5lcy5pbmRleE9mKHYpID09IGkpXHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdW5pcXVlQ3Vpc2luZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc3RhdXJhbnQgcGFnZSBVUkwuXHJcbiAgICovXHJcbiAgc3RhdGljIHVybFRleHRGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQpIHtcclxuICAgIHJldHVybiAoYFZpZXcgRGV0YWlscyBGb3IgJHtyZXN0YXVyYW50Lm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXN0YXVyYW50IHBhZ2UgVVJMLlxyXG4gICAqL1xyXG4gIHN0YXRpYyB1cmxGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQpIHtcclxuICAgIHJldHVybiAoYC4vcmVzdGF1cmFudC5odG1sP2lkPSR7cmVzdGF1cmFudC5pZH1gKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc3RhdXJhbnQgaW1hZ2UgVVJMLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbWFnZVVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudCkge1xyXG4gICAgcmV0dXJuIChgL2ltZy8ke3Jlc3RhdXJhbnQucGhvdG9ncmFwaH0uanBnYCk7XHJcbiAgfVxyXG5cclxuLyoqXHJcbiAgICogUmVzdGF1cmFudCBpbWFnZSBhbHQgdGV4dFxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbWFnZVRleHRGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQpIHtcclxuICAgIHJldHVybiAoYCR7cmVzdGF1cmFudC5uYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzdGF1cmFudCBpbWFnZSBhbHQgdGV4dFxyXG4gICAqL1xyXG4gIHN0YXRpYyByYXRpbmdGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQpIHtcclxuICAgIGxldCByZXZpZXdzID0gMDtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICByZXN0YXVyYW50LnJldmlld3MubWFwKChpdGVtKT0+e1xyXG4gICAgICByZXZpZXdzKys7XHJcbiAgICAgIHRvdGFsID0gdG90YWwgKyBwYXJzZUludChpdGVtLnJhdGluZylcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiAoTWF0aC5yb3VuZCh0b3RhbC9yZXZpZXdzKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzdGF1cmFudCBJbWFnZSBTb3VyY2UgU2V0XHJcbiAgICovXHJcbiAgc3RhdGljIGltYWdlU3JjU2V0Rm9yUmVzdGF1cmFudChyZXN0YXVyYW50KSB7XHJcbiAgICByZXR1cm4gKGAvaW1nLyR7cmVzdGF1cmFudC5waG90b2dyYXBofV8xeC5qcGcgMXgsIC9pbWcvJHtyZXN0YXVyYW50LnBob3RvZ3JhcGh9XzJ4LmpwZyAyeGApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFwIG1hcmtlciBmb3IgYSByZXN0YXVyYW50LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXBNYXJrZXJGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQsIG1hcCkge1xyXG4gICAgLy8gaHR0cHM6Ly9sZWFmbGV0anMuY29tL3JlZmVyZW5jZS0xLjMuMC5odG1sI21hcmtlciAgXHJcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgTC5tYXJrZXIoW3Jlc3RhdXJhbnQubGF0bG5nLmxhdCwgcmVzdGF1cmFudC5sYXRsbmcubG5nXSxcclxuICAgICAge3RpdGxlOiByZXN0YXVyYW50Lm5hbWUsXHJcbiAgICAgIGFsdDogcmVzdGF1cmFudC5uYW1lLFxyXG4gICAgICB1cmw6IERCSGVscGVyLnVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudClcclxuICAgICAgfSlcclxuICAgICAgbWFya2VyLmFkZFRvKG5ld01hcCk7XHJcbiAgICByZXR1cm4gbWFya2VyO1xyXG4gICB9IFxyXG4gICAvKiBzdGF0aWMgbWFwTWFya2VyRm9yUmVzdGF1cmFudChyZXN0YXVyYW50LCBtYXApIHtcclxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogcmVzdGF1cmFudC5sYXRsbmcsXHJcbiAgICAgIHRpdGxlOiByZXN0YXVyYW50Lm5hbWUsXHJcbiAgICAgIHVybDogREJIZWxwZXIudXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50KSxcclxuICAgICAgbWFwOiBtYXAsXHJcbiAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1B9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG1hcmtlcjtcclxuICB9Ki9cclxuXHJcbn1cclxuIl19
