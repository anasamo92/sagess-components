'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _definition = require('../mixin/definition');

var _definition2 = _interopRequireDefault(_definition);

var _builtInComponents = require('../mixin/built-in-components');

var _builtInComponents2 = _interopRequireDefault(_builtInComponents);

var _storeBehaviour = require('../mixin/store-behaviour');

var _storeBehaviour2 = _interopRequireDefault(_storeBehaviour);

var _ownIdentifier = require('../mixin/own-identifier');

var _ownIdentifier2 = _interopRequireDefault(_ownIdentifier);

var _mixin = require('./mixin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Mixin to create a block for the rendering.
* @type {Object}
*/
var formMixin = {
    mixins: [_ownIdentifier2.default, _definition2.default, _mixin.referenceBehaviour, _storeBehaviour2.default, _mixin.validationBehaviour, _mixin.actionBehaviour, _builtInComponents2.default],
    /** @inheritdoc */
    getDefaultProps: function getFormDefaultProps() {
        return {
            hasForm: true,
            /**
            * Defines it the form can have  an edit mode.
            * @type {Boolean}
            */
            hasEdit: true,
            /**
            * Defines if the form has a delete action button.
            * @type {Boolean}
            */
            hasDelete: false,
            /**
            * Does the form call the load action on componentdid mount.
            * @type {Boolean}
            */
            hasLoad: true,
            /**
            * Defines
            * @type {Boolean}
            */
            isEdit: false,
            /**
            * Style of the component.
            * @type {Object}
            */
            style: {}
        };
    },
    /** @inheritdoc */
    getInitialState: function getInitialState() {
        return {
            /**
            * Identifier of the entity.
            * @type {[type]}
            */
            id: this.props.id,
            isEdit: this.props.isEdit
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps() {
        var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var isEdit = newProps.isEdit;

        if (isEdit !== undefined) {
            this.setState({ isEdit: isEdit });
        }
    },

    /** @inheritdoc */
    callMountedActions: function callMountedActions() {
        if (this.props.hasLoad) {
            this._loadData();
        }
    },

    /** @inheritdoc */
    componentWillMount: function componentWillMount() {
        //Build the definitions.
        if (this.registerListeners) {
            this.registerListeners();
        }
        if (this.callMountedActions) {
            this.callMountedActions();
        }
    },

    /** @inheritdoc */
    componentWillUnmount: function componentWillUnmount() {
        if (this.unregisterListeners) {
            this.unregisterListeners();
        }
    },
    _mode: function _mode() {
        return '' + (this.state.isEdit ? 'edit' : 'consult');
    },
    _className: function _className() {
        return 'form-horizontal ' + this.props.style.className;
    },
    _renderActions: function _renderActions() {
        if (this.renderActions) {
            return this.renderActions();
        }
        return this.state.isEdit ? this._renderEditActions() : this._renderConsultActions();
    },
    _renderEditActions: function _renderEditActions() {
        return this.renderEditActions ? this.renderEditActions() : _react2.default.createElement(
            'span',
            null,
            this.buttonSave(),
            this.buttonCancel()
        );
    },
    _renderConsultActions: function _renderConsultActions() {
        return this.renderConsultActions ? this.renderConsultActions() : _react2.default.createElement(
            'div',
            null,
            this.props.hasEdit && this.buttonEdit(),
            this.props.hasDelete && this.buttonDelete()
        );
    },

    /**
    * Handle the form submission.
    * @param {Event} e - React sanityze event from the form submit.
    */
    _handleSubmitForm: function _handleSubmitForm(e) {
        e.preventDefault();
        if (this._validate()) {
            this.action.save.call(this, this._getEntity());
        }
        //return false;
    },

    /** @inheritdoc */
    render: function render() {
        //console.log('state form', this.state);
        if (this.props.hasForm) {
            return _react2.default.createElement(
                'form',
                { className: this._className(), 'data-loading': this.state.isLoading, 'data-mode': this._mode(), noValidate: true, onSubmit: this._handleSubmitForm },
                _react2.default.createElement(
                    'fieldset',
                    null,
                    this.renderContent()
                )
            );
        }
        return this.renderContent();
    }
};
//Form mixins.

// Common mixins.

var _builder = (0, _builder3.default)(formMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZm9ybU1peGluIiwibWl4aW5zIiwib3duSWRlbnRpZmllckJlaGF2aW91ciIsImRlZmluaXRpb25NaXhpbiIsInJlZmVyZW5jZUJlaGF2aW91ciIsInN0b3JlQmVoYXZpb3VyIiwidmFsaWRhdGlvbkJlaGF2aW91ciIsImFjdGlvbkJlaGF2aW91ciIsImJ1aWx0SW5Db21wb25lbnRzIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0Rm9ybURlZmF1bHRQcm9wcyIsImhhc0Zvcm0iLCJoYXNFZGl0IiwiaGFzRGVsZXRlIiwiaGFzTG9hZCIsImlzRWRpdCIsInN0eWxlIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaWQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXdQcm9wcyIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiY2FsbE1vdW50ZWRBY3Rpb25zIiwiX2xvYWREYXRhIiwiY29tcG9uZW50V2lsbE1vdW50IiwicmVnaXN0ZXJMaXN0ZW5lcnMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInVucmVnaXN0ZXJMaXN0ZW5lcnMiLCJfbW9kZSIsInN0YXRlIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9yZW5kZXJBY3Rpb25zIiwicmVuZGVyQWN0aW9ucyIsIl9yZW5kZXJFZGl0QWN0aW9ucyIsIl9yZW5kZXJDb25zdWx0QWN0aW9ucyIsInJlbmRlckVkaXRBY3Rpb25zIiwiYnV0dG9uU2F2ZSIsImJ1dHRvbkNhbmNlbCIsInJlbmRlckNvbnN1bHRBY3Rpb25zIiwiYnV0dG9uRWRpdCIsImJ1dHRvbkRlbGV0ZSIsIl9oYW5kbGVTdWJtaXRGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3ZhbGlkYXRlIiwiYWN0aW9uIiwic2F2ZSIsImNhbGwiLCJfZ2V0RW50aXR5IiwicmVuZGVyIiwiaXNMb2FkaW5nIiwicmVuZGVyQ29udGVudCIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBp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UztBQUNqQkEsVUFBRUMsY0FBRjtBQUNBLFlBQUksS0FBS0MsU0FBTCxFQUFKLEVBQXNCO0FBQ2xCLGlCQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCLEtBQUtDLFVBQUwsRUFBNUI7QUFDSDtBQUNEO0FBQ0gsS0E5R1c7O0FBK0daO0FBQ0FDLFVBaEhZLG9CQWdISDtBQUNMO0FBQ0EsWUFBSSxLQUFLakMsS0FBTCxDQUFXUixPQUFmLEVBQXdCO0FBQ3BCLG1CQUNJO0FBQUE7QUFBQSxrQkFBTSxXQUFXLEtBQUtxQixVQUFMLEVBQWpCLEVBQW9DLGdCQUFjLEtBQUtELEtBQUwsQ0FBV3NCLFNBQTdELEVBQXdFLGFBQVcsS0FBS3ZCLEtBQUwsRUFBbkYsRUFBaUcsZ0JBQWpHLEVBQTRHLFVBQVUsS0FBS2MsaUJBQTNIO0FBQ0k7QUFBQTtBQUFBO0FBQVcseUJBQUtVLGFBQUw7QUFBWDtBQURKLGFBREo7QUFLSDtBQUNELGVBQU8sS0FBS0EsYUFBTCxFQUFQO0FBQ0g7QUExSFcsQ0FBaEI7QUFQQTs7QUFMQTs7ZUF5STZCLHVCQUFRdEQsU0FBUixDO0lBQXJCdUQsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBDb21tb24gbWl4aW5zLlxuaW1wb3J0IGRlZmluaXRpb25NaXhpbiBmcm9tICcuLi9taXhpbi9kZWZpbml0aW9uJztcbmltcG9ydCBidWlsdEluQ29tcG9uZW50cyBmcm9tICcuLi9taXhpbi9idWlsdC1pbi1jb21wb25lbnRzJztcbmltcG9ydCBzdG9yZUJlaGF2aW91ciBmcm9tICcuLi9taXhpbi9zdG9yZS1iZWhhdmlvdXInO1xuaW1wb3J0IG93bklkZW50aWZpZXJCZWhhdmlvdXIgZnJvbSAnLi4vbWl4aW4vb3duLWlkZW50aWZpZXInO1xuLy9Gb3JtIG1peGlucy5cbmltcG9ydCB7IGFjdGlvbkJlaGF2aW91ciwgcmVmZXJlbmNlQmVoYXZpb3VyLCB2YWxpZGF0aW9uQmVoYXZpb3VyIH0gZnJvbSAnLi9taXhpbic7XG5cbi8qKlxuKiBNaXhpbiB0byBjcmVhdGUgYSBibG9jayBmb3IgdGhlIHJlbmRlcmluZy5cbiogQHR5cGUge09iamVjdH1cbiovXG5sZXQgZm9ybU1peGluID0ge1xuICAgIG1peGluczogW293bklkZW50aWZpZXJCZWhhdmlvdXIsIGRlZmluaXRpb25NaXhpbiwgcmVmZXJlbmNlQmVoYXZpb3VyLCBzdG9yZUJlaGF2aW91ciwgdmFsaWRhdGlvbkJlaGF2aW91ciwgYWN0aW9uQmVoYXZpb3VyLCBidWlsdEluQ29tcG9uZW50c10sXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXRGb3JtRGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFzRm9ybTogdHJ1ZSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBEZWZpbmVzIGl0IHRoZSBmb3JtIGNhbiBoYXZlICBhbiBlZGl0IG1vZGUuXG4gICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGhhc0VkaXQ6IHRydWUsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogRGVmaW5lcyBpZiB0aGUgZm9ybSBoYXMgYSBkZWxldGUgYWN0aW9uIGJ1dHRvbi5cbiAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgaGFzRGVsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBEb2VzIHRoZSBmb3JtIGNhbGwgdGhlIGxvYWQgYWN0aW9uIG9uIGNvbXBvbmVudGRpZCBtb3VudC5cbiAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgaGFzTG9hZDogdHJ1ZSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBEZWZpbmVzXG4gICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlzRWRpdDogZmFsc2UsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogU3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBJZGVudGlmaWVyIG9mIHRoZSBlbnRpdHkuXG4gICAgICAgICAgICAqIEB0eXBlIHtbdHlwZV19XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgICBpc0VkaXQ6IHRoaXMucHJvcHMuaXNFZGl0XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzID0ge30pIHtcbiAgICAgICAgbGV0IHsgaXNFZGl0IH0gPSBuZXdQcm9wcztcbiAgICAgICAgaWYgKGlzRWRpdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNFZGl0OiBpc0VkaXQgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgY2FsbE1vdW50ZWRBY3Rpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5oYXNMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIC8vQnVpbGQgdGhlIGRlZmluaXRpb25zLlxuICAgICAgICBpZiAodGhpcy5yZWdpc3Rlckxpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhbGxNb3VudGVkQWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5jYWxsTW91bnRlZEFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVucmVnaXN0ZXJMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBfbW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuc3RhdGUuaXNFZGl0ID8gJ2VkaXQnIDogJ2NvbnN1bHQnfWA7XG4gICAgfSxcbiAgICBfY2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4gYGZvcm0taG9yaXpvbnRhbCAke3RoaXMucHJvcHMuc3R5bGUuY2xhc3NOYW1lfWA7XG4gICAgfSxcbiAgICBfcmVuZGVyQWN0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyQWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmlzRWRpdCA/IHRoaXMuX3JlbmRlckVkaXRBY3Rpb25zKCkgOiB0aGlzLl9yZW5kZXJDb25zdWx0QWN0aW9ucygpO1xuICAgIH0sXG4gICAgX3JlbmRlckVkaXRBY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJFZGl0QWN0aW9ucyA/IHRoaXMucmVuZGVyRWRpdEFjdGlvbnMoKSA6IChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt0aGlzLmJ1dHRvblNhdmUoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5idXR0b25DYW5jZWwoKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIF9yZW5kZXJDb25zdWx0QWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29uc3VsdEFjdGlvbnMgPyB0aGlzLnJlbmRlckNvbnN1bHRBY3Rpb25zKCkgOiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmhhc0VkaXQgJiYgdGhpcy5idXR0b25FZGl0KCl9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGFzRGVsZXRlICYmIHRoaXMuYnV0dG9uRGVsZXRlKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogSGFuZGxlIHRoZSBmb3JtIHN1Ym1pc3Npb24uXG4gICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gUmVhY3Qgc2FuaXR5emUgZXZlbnQgZnJvbSB0aGUgZm9ybSBzdWJtaXQuXG4gICAgKi9cbiAgICBfaGFuZGxlU3VibWl0Rm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbGlkYXRlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLnNhdmUuY2FsbCh0aGlzLCB0aGlzLl9nZXRFbnRpdHkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3N0YXRlIGZvcm0nLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGFzRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3RoaXMuX2NsYXNzTmFtZSgpfSBkYXRhLWxvYWRpbmc9e3RoaXMuc3RhdGUuaXNMb2FkaW5nfSBkYXRhLW1vZGU9e3RoaXMuX21vZGUoKX0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0Rm9ybX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+e3RoaXMucmVuZGVyQ29udGVudCgpfTwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKGZvcm1NaXhpbik7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==