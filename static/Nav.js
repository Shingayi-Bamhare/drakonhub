function NavModule(window, document) {

var globs = null
var self = this

// Autogenerated with DRAKON Editor 1.32


function PushStateMachine_Go_go(self, state) {
    // item 147
    self.state = "Go";
}

function PushStateMachine_Go_nav(self, state) {
    // item 136
    self.state = "Nav";
}

function PushStateMachine_Go_push(self, state) {
    // item 121
    setPageId(self, state)
    // item 120
    window.history.pushState(
        state,
        state.title,
        state.url
    )
    // item 108
    self.state = "Go";
}

function PushStateMachine_Init_default(self, state) {
    // item 91
    self.state = "Init";
}

function PushStateMachine_Init_push(self, state) {
    // item 123
    self.pageId = 1
    // item 119
    setPageId(self, state)
    // item 118
    window.history.replaceState(
        state,
        state.title,
        state.url
    )
    // item 85
    self.state = "Go";
}

function PushStateMachine_Nav_go(self, state) {
    // item 150
    self.state = "Go";
}

function PushStateMachine_Nav_nav(self, state) {
    // item 133
    self.state = "Nav";
}

function PushStateMachine_Nav_push(self, state) {
    // item 122
    console.log("nav")
    // item 99
    self.state = "Go";
}

function fireCallback(data, onCompleted) {
    // item 157
    if (self.stateCallback) {
        // item 160
        self.stateCallback(
            data,
            onCompleted
        )
    }
}

function onStateChange(evt) {
    var onCompleted, state
    // item 163
    state = evt.state
    // item 70
    globs.nav()
    // item 142
    if (state.data) {
        // item 48
        globs.pageId = state.pageId
        // item 161
        onCompleted = function() {
            globs.go()
        }
        // item 143
        fireCallback(
            state.data,
            onCompleted
        )
    } else {
        // item 51
        if (state.pageId > globs.pageId) {
            // item 54
            window.history.forward()
        } else {
            // item 53
            if (state.pageId < globs.pageId) {
                // item 55
                window.history.back()
            }
        }
        // item 151
        globs.go()
    }
}

function pushState(data, title, url) {
    var state
    // item 39
    state = {
        data : data,
        title : title,
        url : url
    }
    // item 124
    globs.push(state)
}

function setPageId(self, state) {
    // item 116
    state.pageId = self.pageId
    // item 117
    self.pageId++
}

function PushStateMachine() {
  var _self = this;
  _self.type_name = "PushStateMachine";
  _self.state = "Init";
  _self.go = function(state) {
    var _state_ = _self.state;
    if (_state_ == "Init") {
      return PushStateMachine_Init_default(_self, state);
    }
    else if (_state_ == "Go") {
      return PushStateMachine_Go_go(_self, state);
    }
    else if (_state_ == "Nav") {
      return PushStateMachine_Nav_go(_self, state);
    }
    return null;
  };
  _self.nav = function(state) {
    var _state_ = _self.state;
    if (_state_ == "Init") {
      return PushStateMachine_Init_default(_self, state);
    }
    else if (_state_ == "Go") {
      return PushStateMachine_Go_nav(_self, state);
    }
    else if (_state_ == "Nav") {
      return PushStateMachine_Nav_nav(_self, state);
    }
    return null;
  };
  _self.push = function(state) {
    var _state_ = _self.state;
    if (_state_ == "Init") {
      return PushStateMachine_Init_push(_self, state);
    }
    else if (_state_ == "Go") {
      return PushStateMachine_Go_push(_self, state);
    }
    else if (_state_ == "Nav") {
      return PushStateMachine_Nav_push(_self, state);
    }
    return null;
  };
}


globs = new PushStateMachine()


this.onStateChange = onStateChange
this.pushState = pushState


}

var Nav = new NavModule(window, document)