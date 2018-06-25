let restaurant;var newMap;document.addEventListener("DOMContentLoaded",e=>{initMap()}),initMap=(()=>{fetchRestaurantFromURL((e,t)=>{e?console.error(e):(self.newMap=L.map("map",{center:[t.latlng.lat,t.latlng.lng],zoom:16,scrollWheelZoom:!1}),L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}",{mapboxToken:"pk.eyJ1IjoiZmFycmVsbHNjcmlwdCIsImEiOiJjamJiaTl3dHMxOGxsMzJwZTlmYnN4ZHN5In0.6Ey50el0atwjDygO_cO0sA",maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox.streets"}).addTo(newMap),DBHelper.mapMarkerForRestaurant(self.restaurant,self.newMap))})}),fetchRestaurantFromURL=(e=>{if(self.restaurant)return void e(null,self.restaurant);const t=getParameterByName("id");t?DBHelper.fetchRestaurantById(t,(t,a)=>{self.restaurant=a,a?(fillRestaurantHTML(),e(null,a)):console.error(t)}):(error="No restaurant id in URL",e(error,null))}),fillRestaurantHTML=((e=self.restaurant)=>{document.getElementById("restaurant-name").innerHTML=e.name;const t=document.getElementById("rating"),a=5-DBHelper.ratingForRestaurant(e);for(let a=0;a<DBHelper.ratingForRestaurant(e);a++){const e=document.createElement("img");e.className="restaurant__star restaurant__star--full",e.src="/img/fullstar.svg",e.alt="",t.append(e)}for(let e=0;e<a;e++){const e=document.createElement("img");e.className="restaurant__star restaurant__star--empty",e.src="/img/emptystar.svg",e.alt="",t.append(e)}const n=document.getElementById("restaurant-address");n.innerHTML=e.address;const r=document.createElement("img");r.className="restaurantdetail__icon",r.src="/img/waypoint.svg",r.alt="",n.prepend(r);const s=document.getElementById("restaurant-img");s.className="restaurant-img",s.src=DBHelper.imageUrlForRestaurant(e),s.alt=DBHelper.imageTextForRestaurant(e),s.srcset=DBHelper.imageSrcSetForRestaurant(e);const l=document.getElementById("restaurant-cuisine");l.innerHTML=e.cuisine_type;const c=document.createElement("img");if(c.className="restaurantdetail__icon",c.src="/img/cuisine.svg",c.alt="",l.prepend(c),e.operating_hours){fillRestaurantHoursHTML();const e=document.getElementById("restaurantdetail__hourscontainer"),t=document.createElement("img");t.className="restaurantdetail__icon",t.src="/img/clock.svg",t.alt="",e.prepend(t)}fillReviewsHTML()}),fillRestaurantHoursHTML=((e=self.restaurant.operating_hours)=>{const t=document.getElementById("restaurant-hours");for(let a in e){const n=document.createElement("tr"),r=document.createElement("td");r.className="restaurantdetail__day",r.innerHTML=a,n.appendChild(r);const s=document.createElement("td");s.className="restaurantdetail__hour",s.innerHTML=e[a],n.appendChild(s),t.appendChild(n)}}),fillReviewsHTML=((e=self.restaurant.reviews)=>{const t=document.getElementById("reviews-container"),a=document.createElement("h3");if(a.innerHTML="Reviews",a.className="restaurantdetail__reviewstitle",t.appendChild(a),!e){const e=document.createElement("p");return e.innerHTML="No reviews yet!",void t.appendChild(e)}const n=document.getElementById("reviews-list");e.forEach(e=>{n.appendChild(createReviewHTML(e))}),t.appendChild(n)}),createReviewHTML=(e=>{const t=document.createElement("li");t.className="restaurantdetail__review";const a=document.createElement("div");a.className="restaurantdetail__commentheader";const n=document.createElement("div");n.className="restaurantdetail__avatarcontainer";const r=document.createElement("img");r.src="/img/avatar.svg",r.className="restaurantdetail__avatar",r.alt="Avatar photo",n.appendChild(r),a.appendChild(n);const s=document.createElement("div");s.className="restaurantdetail__namecontainer";const l=document.createElement("p");l.innerHTML=e.name,s.appendChild(l);const c=document.createElement("p");c.className="restaurantdetail__individualreviewrating";const o=5-parseInt(e.rating);for(let t=0;t<e.rating;t++){const e=document.createElement("img");e.className="restaurant__star restaurant__star--full",e.src="/img/fullstar.svg",e.alt="",c.append(e)}for(let e=0;e<o;e++){const e=document.createElement("img");e.className="restaurant__star restaurant__star--empty",e.src="/img/emptystar.svg",e.alt="",c.append(e)}s.appendChild(c);const m=document.createElement("p");m.className="restaurantdetail__reviewdate";const i=new Date(e.date),d=new Date,u=Math.round((d-i)/1e3/60/60/24);m.innerHTML=`${u} ago`,s.appendChild(m),a.appendChild(s),t.appendChild(a);const p=document.createElement("p");return p.innerHTML=e.comments,t.appendChild(p),t}),getParameterByName=((e,t)=>{t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");const a=new RegExp(`[?&]${e}(=([^&#]*)|&|#|$)`).exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnRfaW5mby5qcyJdLCJuYW1lcyI6WyJyZXN0YXVyYW50IiwibmV3TWFwIiwiaW5pdE1hcCIsImZldGNoUmVzdGF1cmFudEZyb21VUkwiLCJlcnJvciIsImNvbnNvbGUiLCJzZWxmIiwiTCIsIm1hcCIsImNlbnRlciIsImxhdGxuZyIsImxhdCIsImxuZyIsInpvb20iLCJzY3JvbGxXaGVlbFpvb20iLCJ0aWxlTGF5ZXIiLCJtYXBib3hUb2tlbiIsIm1heFpvb20iLCJhdHRyaWJ1dGlvbiIsIkRCSGVscGVyIiwiYWRkVG8iLCJtYXBNYXJrZXJGb3JSZXN0YXVyYW50IiwiY2FsbGJhY2siLCJpZCIsImdldFBhcmFtZXRlckJ5TmFtZSIsImZldGNoUmVzdGF1cmFudEJ5SWQiLCJmaWxsUmVzdGF1cmFudEhUTUwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibmFtZSIsInJhdGluZyIsImVtcHR5U3RhcnMiLCJyYXRpbmdGb3JSZXN0YXVyYW50IiwiaSIsImZ1bGxzdGFyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImFwcGVuZCIsImVtcHR5c3RhciIsImFkZHJlc3MiLCJhZGRyZXNzaWNvbiIsInByZXBlbmQiLCJpbWFnZSIsImltYWdlVXJsRm9yUmVzdGF1cmFudCIsImltYWdlVGV4dEZvclJlc3RhdXJhbnQiLCJzcmNzZXQiLCJpbWFnZVNyY1NldEZvclJlc3RhdXJhbnQiLCJjdWlzaW5lIiwiY3Vpc2luZV90eXBlIiwiY3Vpc2luZWljb24iLCJvcGVyYXRpbmdfaG91cnMiLCJmaWxsUmVzdGF1cmFudEhvdXJzSFRNTCIsImhvdXJzIiwiaG91cnNpY29uIiwiZmlsbFJldmlld3NIVE1MIiwib3BlcmF0aW5nSG91cnMiLCJyb3ciLCJkYXkiLCJrZXkiLCJhcHBlbmRDaGlsZCIsInRpbWUiLCJjb250YWluZXIiLCJyZXZpZXdzIiwidGl0bGUiLCJub1Jldmlld3MiLCJmb3JFYWNoIiwicmV2aWV3IiwidWwiLCJjcmVhdGVSZXZpZXdIVE1MIiwibGkiLCJjb21tZW50SGVhZGVyIiwibGVmdGRpdiIsImF2YXRhciIsInJpZ2h0ZGl2IiwiaW5kaXZpZHVhbHJhdGluZyIsInBhcnNlSW50IiwiZGF0ZSIsInJldmlld2RhdGUiLCJ0b2RheWRhdGUiLCJEYXRlIiwiZGF5c2RpZmZlcmVuY2UiLCJjb21tZW50cyIsIndpbmRvdyIsImxvY2F0aW9uIiwidXJsIiwicmVnZXgiLCJocmVmIiwicmVzdWx0cyIsIlJlZ0V4cCIsImV4ZWMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUNKLElBQUlDLE9Bc0hGQyxTQUFBQSxpQkFBQUEsbUJBQUFBLElBREZBLFlBUUVDLFFBQUFBLE1BQ0VBLHVCQUFXLENBQUFDLEVBQUFKLEtBQUVJLEVBQ1hDLFFBQVFELE1BQU1BLElBRWRFLEtBQUtMLE9BQVNNLEVBQUVDLElBQUksT0FDbEJDLFFBQVNULEVBQVdVLE9BQU9DLElBQUtYLEVBQVdVLE9BQU9FLEtBQ2xEQyxLQUFNLEdBQ05DLGlCQUFpQixJQUVuQlAsRUFBRVEsVUFBVSxxRkFDVkMsWUFBYSxvR0FDYkMsUUFBUyxHQUNUQyxZQUFhLDBOQUtmQyxHQUFBQSxtQkFDREMsTUFBQW5CLFFBbEJIa0IsU0FBQUUsdUJBQUFmLEtBQUFOLFdBQUFNLEtBQUFMLGFBNkJ1QkUsdUJBQUFtQixDQUFBQSxJQUNyQkEsR0FBQUEsS0FBQUEsV0FFRCxZQURDQSxFQUFBLEtBQUFoQixLQUFBTixZQUdGLE1BQUt1QixFQUFJQyxtQkFBQSxNQUFFRCxFQUlUSixTQUFTTSxvQkFBb0JGLEVBQUksQ0FBQ25CLEVBQU9KLEtBQ3ZDTSxLQUFLTixXQUFhQSxFQUNiQSxHQUlMMEIscUJBQ0FKLEVBQVMsS0FBTXRCLElBSmJLLFFBQVFELE1BQU1BLE1BTmxCQSxNQUFRLDBCQUNSa0IsRUFBU2xCLE1BQU8sU0FpQnBCc0IsbUJBQXFCLEVBQUMxQixFQUFhTSxLQUFLTixjQUN6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S0FBdEJiLEVBQUFVLE1BQ0FFLEVBQUEsSUFBQUMsS0FFS3JELEVBQWVzRCxLQUFBQSxPQUFlRixFQUFuQ0QsR0FBQSxJQUFBLEdBQUEsR0FBQSxJQUNBSixFQUFBQSxhQUFBTyxRQUFBUCxFQUFTZCxZQUFZaUIsR0FHckJQLEVBQUFWLFlBQWVXLEdBQWZELEVBQUdWLFlBQVlXLEdBR2ZXLE1BQUFBLEVBQVN2RCxTQUFZd0MsY0FBckIsS0F4REYsT0F5REVHLEVBQUdWLFVBQVlzQixFQUFmQSxTQUFBWixFQUFHVixZQUFZc0IsR0F6RGpCWixJQWtFRWhELG1CQUNRNkQsRUFBQUEsRUFBT0MsS0FDZnhELElBQ0F5RCxFQUFNQyxPQUFRRixTQUFBRyxNQUFkM0QsRUFDRTRELEVBQUFBLFFBQVVGLFVBRFosUUFFQSxNQUVBRSxFQURFLElBQUFDLGNBQUE3RCxzQkFFQThELEtBQUFMLEdBQ0YsT0FBQUcsRUFGS0EsRUFBUSxHQUVORyxtQkFBbUJILEVBQVEsR0FBR0ksUUFBUSxNQUFPLE1BRDNDLEdBVFgiLCJmaWxlIjoicmVzdGF1cmFudF9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHJlc3RhdXJhbnQ7XG52YXIgbmV3TWFwO1xuXG4vLyAvKipcbi8vICAqIENoZWNrIHRvIHNlZSBpZiBzZXJ2aWNlIHdvcmtlciBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIgXG4vLyAgKi9cbi8vIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIFxuLy8gICAvKiBpZiBpdCBpcywgcmVnaXN0ZXIgdGhlIHNlcnZpY2Ugd29ya2VyICovXG4vLyAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc3cuanMnKS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cbi8vICAgICAvLyBBbHJlYWR5IG9uIHRoZSBsYXRlc3QgdmVyc2lvbiwgYmFpbFxuLy8gICAgIGlmKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKXtcbi8vICAgICAgIHJldHVybjtcbi8vICAgICB9XG4vLyAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZXJlJ3MgYSB3YWl0aW5nIHNlcnZpY2Ugd29ya2VyXG4vLyAgICAgaWYgKHJlcy53YWl0aW5nKXtcbi8vICAgICAgIF91cGRhdGVSZWFkeSgpO1xuLy8gICAgICAgcmV0dXJuIFxuLy8gICAgIH1cblxuLy8gICAgIGlmIChyZXMuaW5zdGFsbGluZykge1xuLy8gICAgICAgX3RyYWNrSW5zdGFsbGluZyhyZXMuaW5zdGFsbGluZyk7XG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIHJlcy5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGVmb3VuZCcsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgX3RyYWNrSW5zdGFsbGluZyhyZXMuaW5zdGFsbGluZyk7XG4vLyAgICAgfSk7XG4gICAgXG4vLyAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcbi8vICAgICBjb25zb2xlLmxvZygnZXJyb3IgcmVnaXN0ZXJpbmcgc2VydmljZSB3b3JrZXI6ICcsZXJyb3IpXG4vLyAgIH0pO1xuICBcbi8vICAgZnVuY3Rpb24gX3RyYWNrSW5zdGFsbGluZyh3b3JrZXIpe1xuLy8gICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZWNoYW5nZScsZnVuY3Rpb24oKXtcbi8vICAgICAgIGlmICh3b3JrZXIuc3RhdGUgPT0gJ2luc3RhbGxlZCcpe1xuLy8gICAgICAgICBfdXBkYXRlUmVhZHkod29ya2VyKTtcbi8vICAgICAgIH1cbi8vICAgICB9KVxuLy8gICB9XG5cbi8vICAgdmFyIGZvY3VzZWRFbGVtZW50O1xuLy8gICAvKipcbi8vICAgICogTm90aWZpZXMgdGhlIHVzZXIgdGhhdCBhbiB1cGRhdGVkIFNXIGlzIGF2YWlsYWJsZVxuLy8gICAgKi9cbi8vICAgZnVuY3Rpb24gX3VwZGF0ZVJlYWR5KHdvcmtlcil7XG4vLyAgICAgLy8gSWYgdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSB1cGRhdGUgYnV0dG9uLCB1cGRhdGUgdGhlIHNlcnZpY2Ugd29ya2VyXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS12ZXJzaW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4vLyAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe2FjdGlvbjonc2tpcFdhaXRpbmcnfSk7XG4vLyAgICAgfSk7XG4vLyAgICAgLy8gSWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBkaXNtaXNzIGJ1dHRvbiwgaGlkZSB0aGUgdG9hc3Rcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzbWlzcy12ZXJzaW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4vLyAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbi8vICAgICAgIGZvY3VzZWRFbGVtZW50LmZvY3VzKClcbi8vICAgICB9KTtcbi8vICAgICAvLyBJZiB0aGUgdG9hc3QgaXMgZGlzcGxheWluZywgbGlzdGVuIGZvciBrZXlib2FyZCBldmVudHNcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJyxmdW5jdGlvbihlKXtcbi8vICAgICAgIC8vQ2hlY2sgZm9yIFRhYiBrZXkgcHJlc3Ncbi8vICAgICAgIGlmKGUua2V5Q29kZSA9PT0gOSl7XG4gICAgICAgIFxuLy8gICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuLy8gICAgICAgICAgIC8vUHJlc3NlZCBTaGlmdCBUYWJcbi8vICAgICAgICAgICBpZihkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdFRhYlN0b3ApIHtcbi8vICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgIGxhc3RUYWJTdG9wLmZvY3VzKCk7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgICAvL1ByZXNzZWQgVGFiXG4vLyAgICAgICAgICAgaWYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdFRhYlN0b3ApIHtcbi8vICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgIGZpcnN0VGFiU3RvcC5mb2N1cygpO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgICAgLy8gRXNjYXBlIEtleVxuLy8gICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpe1xuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbi8vICAgICAgICAgZm9jdXNlZEVsZW1lbnQuZm9jdXMoKVxuLy8gICAgICAgfSBcbi8vICAgICB9KTtcblxuLy8gICAgIC8vIFJlbWVtYmVyIHdoYXQgdGhlIGxhc3QgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIHdhcywgYW5kIG1ha2UgaXQgZm9jdXNhYmxlIHNvIHdlIGNhbiByZXR1cm4gdG8gaXRcbi8vICAgICBmb2N1c2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4vLyAgICAgZm9jdXNlZEVsZW1lbnQudGFiaW5kZXggPSAxO1xuICAgXG4vLyAgICAgLy8gV2hlbiB0aGUgdG9hc3QgaXMgdmlzaWJsZSwgdGhpcyBpcyB3aGF0IHdlJ2xsIHVzZSB0byB0ZW1wb3JhcmlseSB0cmFwIGZvY3VzXG4vLyAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gJyN0b2FzdCBwLCAjdXBkYXRlLXZlcnNpb24sICNkaXNtaXNzLXZlcnNpb24nO1xuLy8gICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpO1xuLy8gICAgIGZvY3VzYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZm9jdXNhYmxlRWxlbWVudHMpO1xuICAgIFxuLy8gICAgIHZhciBmaXJzdFRhYlN0b3AgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcbi8vICAgICB2YXIgbGFzdFRhYlN0b3AgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLTFdO1xuXG4vLyAgICAgLy8gT2sgdGltZSB0byBzaG93IHRoZSB0b2FzdCBhbmQgZm9jdXMgb24gaXRcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9hc3QgcCcpLmZvY3VzKCk7XG5cbi8vICAgfVxuICBcblxuLy8gICAvKipcbi8vICAgICogTGlzdGVucyBmb3IgYSBjaGFuZ2UgaW4gdGhlIFNXLCByZWxvYWRzIHRoZSBwYWdlIGFzIGEgcmVzdWx0XG4vLyAgICAqL1xuLy8gICB2YXIgcmVmcmVzaGluZztcbi8vICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsIGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdjb250cm9sbGVyIGNoYW5nZScpXG4vLyAgICAgaWYgKHJlZnJlc2hpbmcpIHJldHVybjtcbi8vICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4vLyAgICAgcmVmcmVzaGluZyA9IHRydWU7XG4vLyAgIH0pO1xuLy8gfVxuXG5cblxuLyoqXG4gICogSW5pdGlhbGl6ZSBtYXAgYXMgc29vbiBhcyB0aGUgcGFnZSBpcyBsb2FkZWQuXG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHsgIFxuICBpbml0TWFwKCk7XG4gIH0pO1xuICBcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgbGVhZmxldCBtYXBcbiAgICovXG4gIGluaXRNYXAgPSAoKSA9PiB7XG4gIGZldGNoUmVzdGF1cmFudEZyb21VUkwoKGVycm9yLCByZXN0YXVyYW50KSA9PiB7XG4gICAgaWYgKGVycm9yKSB7IC8vIEdvdCBhbiBlcnJvciFcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0gZWxzZSB7ICAgICAgXG4gICAgICBzZWxmLm5ld01hcCA9IEwubWFwKCdtYXAnLCB7XG4gICAgICAgIGNlbnRlcjogW3Jlc3RhdXJhbnQubGF0bG5nLmxhdCwgcmVzdGF1cmFudC5sYXRsbmcubG5nXSxcbiAgICAgICAgem9vbTogMTYsXG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLnRpbGVzLm1hcGJveC5jb20vdjQve2lkfS97en0ve3h9L3t5fS5qcGc3MD9hY2Nlc3NfdG9rZW49e21hcGJveFRva2VufScsIHtcbiAgICAgICAgbWFwYm94VG9rZW46ICdway5leUoxSWpvaVptRnljbVZzYkhOamNtbHdkQ0lzSW1FaU9pSmphbUppYVRsM2RITXhPR3hzTXpKd1pUbG1Zbk40WkhONUluMC42RXk1MGVsMGF0d2pEeWdPX2NPMHNBJyxcbiAgICAgICAgbWF4Wm9vbTogMTgsXG4gICAgICAgIGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9cIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsICcgK1xuICAgICAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzIuMC9cIj5DQy1CWS1TQTwvYT4sICcgK1xuICAgICAgICAgICdJbWFnZXJ5IMKpIDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL1wiPk1hcGJveDwvYT4nLFxuICAgICAgICBpZDogJ21hcGJveC5zdHJlZXRzJyAgICBcbiAgICAgIH0pLmFkZFRvKG5ld01hcCk7XG4gICAgICBEQkhlbHBlci5tYXBNYXJrZXJGb3JSZXN0YXVyYW50KHNlbGYucmVzdGF1cmFudCwgc2VsZi5uZXdNYXApO1xuICAgIH1cbiAgfSk7XG4gIH0gIFxuICBcbiAgLyogd2luZG93LmluaXRNYXAgPSAoKSA9PiB7XG4gIH0gKi9cblxuLyoqXG4gKiBHZXQgY3VycmVudCByZXN0YXVyYW50IGZyb20gcGFnZSBVUkwuXG4gKi9cbmZldGNoUmVzdGF1cmFudEZyb21VUkwgPSAoY2FsbGJhY2spID0+IHtcbiAgaWYgKHNlbGYucmVzdGF1cmFudCkgeyAvLyByZXN0YXVyYW50IGFscmVhZHkgZmV0Y2hlZCFcbiAgICBjYWxsYmFjayhudWxsLCBzZWxmLnJlc3RhdXJhbnQpXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGlkID0gZ2V0UGFyYW1ldGVyQnlOYW1lKCdpZCcpO1xuICBpZiAoIWlkKSB7IC8vIG5vIGlkIGZvdW5kIGluIFVSTFxuICAgIGVycm9yID0gJ05vIHJlc3RhdXJhbnQgaWQgaW4gVVJMJ1xuICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgfSBlbHNlIHtcbiAgICBEQkhlbHBlci5mZXRjaFJlc3RhdXJhbnRCeUlkKGlkLCAoZXJyb3IsIHJlc3RhdXJhbnQpID0+IHtcbiAgICAgIHNlbGYucmVzdGF1cmFudCA9IHJlc3RhdXJhbnQ7XG4gICAgICBpZiAoIXJlc3RhdXJhbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZpbGxSZXN0YXVyYW50SFRNTCgpO1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdGF1cmFudClcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSByZXN0YXVyYW50IEhUTUwgYW5kIGFkZCBpdCB0byB0aGUgd2VicGFnZVxuICovXG5maWxsUmVzdGF1cmFudEhUTUwgPSAocmVzdGF1cmFudCA9IHNlbGYucmVzdGF1cmFudCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhdXJhbnQtbmFtZScpO1xuICBuYW1lLmlubmVySFRNTCA9IHJlc3RhdXJhbnQubmFtZTtcblxuICAvLyBSZXZpZXcgb2YgdGhlIHJlc3RhdXJhbnRcbiAgY29uc3QgcmF0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGluZycpO1xuICBjb25zdCBlbXB0eVN0YXJzID0gNSAtIERCSGVscGVyLnJhdGluZ0ZvclJlc3RhdXJhbnQocmVzdGF1cmFudCk7XG4gIGZvcihsZXQgaT0wOyBpIDwgREJIZWxwZXIucmF0aW5nRm9yUmVzdGF1cmFudChyZXN0YXVyYW50KTsgaSsrKXtcbiAgICBjb25zdCBmdWxsc3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZ1bGxzdGFyLmNsYXNzTmFtZT1cInJlc3RhdXJhbnRfX3N0YXIgcmVzdGF1cmFudF9fc3Rhci0tZnVsbFwiO1xuICAgIGZ1bGxzdGFyLnNyYyA9IFwiL2ltZy9mdWxsc3Rhci5zdmdcIjtcbiAgICBmdWxsc3Rhci5hbHQgPSBcIlwiXG4gICAgcmF0aW5nLmFwcGVuZChmdWxsc3Rhcik7XG4gIH1cbiAgZm9yKGxldCBpPTA7IGkgPCBlbXB0eVN0YXJzOyBpKyspe1xuICAgIGNvbnN0IGVtcHR5c3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGVtcHR5c3Rhci5jbGFzc05hbWU9XCJyZXN0YXVyYW50X19zdGFyIHJlc3RhdXJhbnRfX3N0YXItLWVtcHR5XCI7XG4gICAgZW1wdHlzdGFyLnNyYyA9IFwiL2ltZy9lbXB0eXN0YXIuc3ZnXCI7XG4gICAgZW1wdHlzdGFyLmFsdD0gXCJcIlxuICAgIHJhdGluZy5hcHBlbmQoZW1wdHlzdGFyKTtcbiAgfVxuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudC1hZGRyZXNzJyk7XG4gIGFkZHJlc3MuaW5uZXJIVE1MID0gcmVzdGF1cmFudC5hZGRyZXNzO1xuXG4gIGNvbnN0IGFkZHJlc3NpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGFkZHJlc3NpY29uLmNsYXNzTmFtZSA9ICdyZXN0YXVyYW50ZGV0YWlsX19pY29uJztcbiAgYWRkcmVzc2ljb24uc3JjID0gJy9pbWcvd2F5cG9pbnQuc3ZnJztcbiAgYWRkcmVzc2ljb24uYWx0ID0gJyc7XG4gIGFkZHJlc3MucHJlcGVuZChhZGRyZXNzaWNvbilcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50LWltZycpO1xuICBpbWFnZS5jbGFzc05hbWUgPSAncmVzdGF1cmFudC1pbWcnXG4gIGltYWdlLnNyYyA9IERCSGVscGVyLmltYWdlVXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgaW1hZ2UuYWx0ID0gREJIZWxwZXIuaW1hZ2VUZXh0Rm9yUmVzdGF1cmFudChyZXN0YXVyYW50KTtcbiAgaW1hZ2Uuc3Jjc2V0ID0gREJIZWxwZXIuaW1hZ2VTcmNTZXRGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQpO1xuXG4gIGNvbnN0IGN1aXNpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudC1jdWlzaW5lJyk7XG4gIGN1aXNpbmUuaW5uZXJIVE1MID0gcmVzdGF1cmFudC5jdWlzaW5lX3R5cGU7XG5cbiAgY29uc3QgY3Vpc2luZWljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY3Vpc2luZWljb24uY2xhc3NOYW1lID0gJ3Jlc3RhdXJhbnRkZXRhaWxfX2ljb24nO1xuICBjdWlzaW5laWNvbi5zcmMgPSAnL2ltZy9jdWlzaW5lLnN2Zyc7XG4gIGN1aXNpbmVpY29uLmFsdCA9ICcnO1xuICBjdWlzaW5lLnByZXBlbmQoY3Vpc2luZWljb24pXG5cbiAgLy8gZmlsbCBvcGVyYXRpbmcgaG91cnNcbiAgaWYgKHJlc3RhdXJhbnQub3BlcmF0aW5nX2hvdXJzKSB7XG4gICAgZmlsbFJlc3RhdXJhbnRIb3Vyc0hUTUwoKTtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhdXJhbnRkZXRhaWxfX2hvdXJzY29udGFpbmVyJyk7XG4gIFxuICAgIGNvbnN0IGhvdXJzaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvdXJzaWNvbi5jbGFzc05hbWUgPSAncmVzdGF1cmFudGRldGFpbF9faWNvbic7XG4gICAgaG91cnNpY29uLnNyYyA9ICcvaW1nL2Nsb2NrLnN2Zyc7XG4gICAgaG91cnNpY29uLmFsdCA9ICcnO1xuICAgIGhvdXJzLnByZXBlbmQoaG91cnNpY29uKVxuXG4gIH1cbiAgLy8gZmlsbCByZXZpZXdzXG4gIGZpbGxSZXZpZXdzSFRNTCgpO1xufVxuXG4vKipcbiAqIENyZWF0ZSByZXN0YXVyYW50IG9wZXJhdGluZyBob3VycyBIVE1MIHRhYmxlIGFuZCBhZGQgaXQgdG8gdGhlIHdlYnBhZ2UuXG4gKi9cbmZpbGxSZXN0YXVyYW50SG91cnNIVE1MID0gKG9wZXJhdGluZ0hvdXJzID0gc2VsZi5yZXN0YXVyYW50Lm9wZXJhdGluZ19ob3VycykgPT4ge1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50LWhvdXJzJyk7XG4gIGZvciAobGV0IGtleSBpbiBvcGVyYXRpbmdIb3Vycykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGRheS5jbGFzc05hbWUgPSAncmVzdGF1cmFudGRldGFpbF9fZGF5JztcbiAgICBkYXkuaW5uZXJIVE1MID0ga2V5O1xuICAgIHJvdy5hcHBlbmRDaGlsZChkYXkpO1xuXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdGltZS5jbGFzc05hbWUgPSAncmVzdGF1cmFudGRldGFpbF9faG91cic7XG4gICAgdGltZS5pbm5lckhUTUwgPSBvcGVyYXRpbmdIb3Vyc1trZXldO1xuICAgIHJvdy5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgIGhvdXJzLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYWxsIHJldmlld3MgSFRNTCBhbmQgYWRkIHRoZW0gdG8gdGhlIHdlYnBhZ2UuXG4gKi9cbmZpbGxSZXZpZXdzSFRNTCA9IChyZXZpZXdzID0gc2VsZi5yZXN0YXVyYW50LnJldmlld3MpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jldmlld3MtY29udGFpbmVyJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGUuaW5uZXJIVE1MID0gJ1Jldmlld3MnO1xuICB0aXRsZS5jbGFzc05hbWUgPSAncmVzdGF1cmFudGRldGFpbF9fcmV2aWV3c3RpdGxlJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBpZiAoIXJldmlld3MpIHtcbiAgICBjb25zdCBub1Jldmlld3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbm9SZXZpZXdzLmlubmVySFRNTCA9ICdObyByZXZpZXdzIHlldCEnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub1Jldmlld3MpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXZpZXdzLWxpc3QnKTtcbiAgcmV2aWV3cy5mb3JFYWNoKHJldmlldyA9PiB7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY3JlYXRlUmV2aWV3SFRNTChyZXZpZXcpKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIHJldmlldyBIVE1MIGFuZCBhZGQgaXQgdG8gdGhlIHdlYnBhZ2UuXG4gKi9cbmNyZWF0ZVJldmlld0hUTUwgPSAocmV2aWV3KSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NOYW1lID0gJ3Jlc3RhdXJhbnRkZXRhaWxfX3Jldmlldyc7XG4gIGNvbnN0IGNvbW1lbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudEhlYWRlci5jbGFzc05hbWUgPSAncmVzdGF1cmFudGRldGFpbF9fY29tbWVudGhlYWRlcic7XG5cbiAgY29uc3QgbGVmdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZWZ0ZGl2LmNsYXNzTmFtZSA9ICdyZXN0YXVyYW50ZGV0YWlsX19hdmF0YXJjb250YWluZXInO1xuXG4gIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBhdmF0YXIuc3JjICA9ICcvaW1nL2F2YXRhci5zdmcnO1xuICBhdmF0YXIuY2xhc3NOYW1lID0gJ3Jlc3RhdXJhbnRkZXRhaWxfX2F2YXRhcic7XG4gIGF2YXRhci5hbHQgPSAnQXZhdGFyIHBob3RvJztcbiAgbGVmdGRpdi5hcHBlbmRDaGlsZChhdmF0YXIpO1xuICBjb21tZW50SGVhZGVyLmFwcGVuZENoaWxkKGxlZnRkaXYpO1xuXG4gIGNvbnN0IHJpZ2h0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0ZGl2LmNsYXNzTmFtZSA9ICdyZXN0YXVyYW50ZGV0YWlsX19uYW1lY29udGFpbmVyJztcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuYW1lLmlubmVySFRNTCA9IHJldmlldy5uYW1lO1xuICByaWdodGRpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgXG4gIC8vIENyZWF0ZSBTdGFycyBmb3IgUmV2aWV3XG4gIGNvbnN0IGluZGl2aWR1YWxyYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGluZGl2aWR1YWxyYXRpbmcuY2xhc3NOYW1lID0gJ3Jlc3RhdXJhbnRkZXRhaWxfX2luZGl2aWR1YWxyZXZpZXdyYXRpbmcnO1xuICBjb25zdCBlbXB0eVN0YXJzID0gNSAtIHBhcnNlSW50KHJldmlldy5yYXRpbmcpO1xuICBmb3IobGV0IGk9MDsgaSA8IHJldmlldy5yYXRpbmc7IGkrKyl7XG4gICAgY29uc3QgZnVsbHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmdWxsc3Rhci5jbGFzc05hbWU9XCJyZXN0YXVyYW50X19zdGFyIHJlc3RhdXJhbnRfX3N0YXItLWZ1bGxcIjtcbiAgICBmdWxsc3Rhci5zcmMgPSBcIi9pbWcvZnVsbHN0YXIuc3ZnXCI7XG4gICAgZnVsbHN0YXIuYWx0ID0gXCJcIlxuICAgIGluZGl2aWR1YWxyYXRpbmcuYXBwZW5kKGZ1bGxzdGFyKTtcbiAgfVxuICBmb3IobGV0IGk9MDsgaSA8IGVtcHR5U3RhcnM7IGkrKyl7XG4gICAgY29uc3QgZW1wdHlzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZW1wdHlzdGFyLmNsYXNzTmFtZT1cInJlc3RhdXJhbnRfX3N0YXIgcmVzdGF1cmFudF9fc3Rhci0tZW1wdHlcIjtcbiAgICBlbXB0eXN0YXIuc3JjID0gXCIvaW1nL2VtcHR5c3Rhci5zdmdcIjtcbiAgICBlbXB0eXN0YXIuYWx0PSBcIlwiXG4gICAgaW5kaXZpZHVhbHJhdGluZy5hcHBlbmQoZW1wdHlzdGFyKTtcbiAgfVxuXG4gIHJpZ2h0ZGl2LmFwcGVuZENoaWxkKGluZGl2aWR1YWxyYXRpbmcpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXRlLmNsYXNzTmFtZSA9ICdyZXN0YXVyYW50ZGV0YWlsX19yZXZpZXdkYXRlJ1xuICBjb25zdCByZXZpZXdkYXRlID0gbmV3IERhdGUocmV2aWV3LmRhdGUpO1xuICBjb25zdCB0b2RheWRhdGUgPSBuZXcgRGF0ZSgpO1xuICAvLyBTdWJ0cmFjdCB0b2RheXMgZGF0ZSBmcm9tIHRoZSBkYXRlIG9mIHRoZSByZXZpZXcsIHRoZW4gZm9ybWF0IGludG8gZGF5c1xuICBjb25zdCBkYXlzZGlmZmVyZW5jZSA9IE1hdGgucm91bmQoKHRvZGF5ZGF0ZSAtIHJldmlld2RhdGUpLzEwMDAvNjAvNjAvMjQpXG4gIGRhdGUuaW5uZXJIVE1MID0gYCR7ZGF5c2RpZmZlcmVuY2V9IGFnb2A7XG4gIHJpZ2h0ZGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGNvbW1lbnRIZWFkZXIuYXBwZW5kQ2hpbGQocmlnaHRkaXYpOyBcbiAgbGkuYXBwZW5kQ2hpbGQoY29tbWVudEhlYWRlcik7XG5cbiAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbW1lbnRzLmlubmVySFRNTCA9IHJldmlldy5jb21tZW50cztcbiAgbGkuYXBwZW5kQ2hpbGQoY29tbWVudHMpO1xuXG4gIHJldHVybiBsaTtcbn1cblxuLyoqXG4gKiBHZXQgYSBwYXJhbWV0ZXIgYnkgbmFtZSBmcm9tIHBhZ2UgVVJMLlxuICovXG5nZXRQYXJhbWV0ZXJCeU5hbWUgPSAobmFtZSwgdXJsKSA9PiB7XG4gIGlmICghdXJsKVxuICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgWz8mXSR7bmFtZX0oPShbXiYjXSopfCZ8I3wkKWApLFxuICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG4gIGlmICghcmVzdWx0cylcbiAgICByZXR1cm4gbnVsbDtcbiAgaWYgKCFyZXN1bHRzWzJdKVxuICAgIHJldHVybiAnJztcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbn1cbiJdfQ==
