# FindMyRecords App

## Summary

This is a React + MobX project.

It also uses Bootstrap 4 CSS (Beta 2).

It's a fork of the `create-react-app` repository which is a boilerplate for React, with Babel,
allowing to use, for example, ES6 features and decorators (@).

## State container

### MobX

![Image of Yaktocat](https://mobx.js.org/getting-started-assets/overview.png)

States are the source of the truth : it contains the current state of our application as :

- Steps of the user in the webapp
- Current discogs user searched
- Wantlists : current pagination, next pagination URL
- Chosens filters
- Results
- ProgressBar value
- ...

This state will be put in a Store, which will be injected in components which need it.
The store provides Observable data, i.e. the data will be evaluated in the view when MobX Derivations (Computations...)
are performed. 

## Flux pattern 

Here is a complete Flux pattern for React App :

![Image of Yaktocat](http://blog.soat.fr/wp-content/uploads/2016/04/flux-diagram-white-background.png)


### In practice, get the Discogs User

- The user receive the initial store with the default state. The state cointainer used is Mobx. (`Store`)
- He will perform a search for a Discogs Profile in the searchbar. (`React Views/User interactions`)
- APIs Services ask data to the API. (`Actions Creators`)
- As APIs Services callbacks are in the store, (`Callbacks`)
- the store will receive data and modify the state. (`Store`)
- The view is updated. (`Change Events`)


### In practice, view updating

We simply need to add `observer` and `inject` decorators in our component to observe the state data of `resultStore`.

    @inject('resultStore')
    @observer
    export default class LoadingBar extends React.Component {
    ...
    render() 
      let value = this.props.resultStore.prototype.state.loadingBar;
      return (
        {
            <div className="progressBar" value={value}></div>
        }
      )
    }

If the progressBar state is modified by a MobX derivation, it view value will be updated.

### A example of an Action in the Store
    @action getDiscogsWantList = (url) => {
        discogsService.getDiscogsWantList(url)
            .then((response) => {
                this.state.wantList = response.data.wants.map(want => new WantItem(want));
                this.state.loadingBar = 100;
            })
            .catch((error) => {
                console.log(error);
                this.state.wantList = 'notFound';
                this.state.loadingBar = 100;
            })
    }

It calls the API Discogs method `discogsService.getDiscogsWantList()` and once the callback is received it will update the state value wantList, and the progressBar state value, performing view updating.


## Openings

- Currently, as it's a small project, we didn't have to use a dispatcher in order to manage our actions, but it might be a good idea for treating contiguous actions and theirs responses.

- CSS needs to be transform into SCSS.

- Tests rendering with `Jest`.

- Responsive design.

## Sources

* https://mobx.js.org/getting-started.html
* https://github.com/krasimir/react-in-patterns/tree/master/patterns/flux
* http://blog.soat.fr/2016/04/larchitecture-flux-avec-react/