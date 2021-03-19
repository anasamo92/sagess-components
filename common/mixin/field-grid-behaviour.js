'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GRID_SIZE = 12,
    CELL = 'mdl-cell';

/**
 * An example of the label and content size, and of label and content offset, with function fieldFor
 * 
 * I want to have the label on the first row of the grid, the field on the second one,
 * with a 'padding' (offset) of one cell on each row.
 * 
 * const fieldOptions = { labelSize: 10, contentSize: 10, labelOffset:1, contentOffset:1 };
 * ...
 * {this.fieldFor('nom', fieldOptions)}
 * 
 **/

var fieldGridBehaviourMixin = {
    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            /**
            * Size of the label in the grid system.
            * @type {Number}
            */
            labelSize: 4,
            /**
             * POsition of the label in the cell.
             * Possible values: top, middle, bottom
             * @type {String}
             */
            labelCellPosition: 'top',
            /**
             * Position of the content in the cell.
             * Possible values: top, middle, bottom
             * @type {String}
             */
            contentCellPosition: 'top'
        };
    },

    /** @inheritdoc */
    propTypes: {
        contentCellPosition: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
        labelCellPosition: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
        labelSize: _react.PropTypes.number,
        contentSize: _react.PropTypes.number,
        labelOffset: _react.PropTypes.number,
        contentOffset: _react.PropTypes.number
    },
    _buildGridClassName: function _buildGridClassName(prop, suffix) {
        return prop ? ' mdl-cell--' + prop + (suffix ? suffix : '') : '';
    },
    _getCellGridClassName: function _getCellGridClassName(position, size, offset) {
        var cellPosition = this._buildGridClassName(position);
        var cellSize = this._buildGridClassName(size, '-col');
        var cellOffset = this._buildGridClassName(offset, '-offset');

        return CELL + cellPosition + cellSize + cellOffset;
    },

    /**
    * Get the label gridClass.
    * @returns {string} - The label gridSize.
    */
    _getLabelGridClassName: function _getLabelGridClassName() {
        return this._getCellGridClassName(this.props.labelCellPosition, this.props.labelSize, this.props.labelOffset);
    },

    /**
    * Get the content class Name.
    * @returns {string} - The content gridSize.
    */
    _getContentGridClassName: function _getContentGridClassName() {
        return this._getCellGridClassName(this.props.contentCellPosition, this.props.contentSize || GRID_SIZE - this.props.labelSize, this.props.contentOffset);
    },

    /**
    * Get the content offset className.
    * @returns {string} - The label gridSize.
    */
    _getContentOffsetClassName: function _getContentOffsetClassName() {
        return CELL + ' mdl-cell--' + this.props.labelSize + '-offset';
    }
};

exports.default = fieldGridBehaviourMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiR1JJRF9TSVpFIiwiQ0VMTCIsImZpZWxkR3JpZEJlaGF2aW91ck1peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwibGFiZWxTaXplIiwibGFiZWxDZWxsUG9zaXRpb24iLCJjb250ZW50Q2VsbFBvc2l0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiY29udGVudFNpemUiLCJsYWJlbE9mZnNldCIsImNvbnRlbnRPZmZzZXQiLCJfYnVpbGRHcmlkQ2xhc3NOYW1lIiwicHJvcCIsInN1ZmZpeCIsIl9nZXRDZWxsR3JpZENsYXNzTmFtZSIsInBvc2l0aW9uIiwic2l6ZSIsIm9mZnNldCIsImNlbGxQb3NpdGlvbiIsImNlbGxTaXplIiwiY2VsbE9mZnNldCIsIl9nZXRMYWJlbEdyaWRDbGFzc05hbWUiLCJwcm9wcyIsIl9nZXRDb250ZW50R3JpZENsYXNzTmFtZSIsIl9nZXRDb250ZW50T2Zmc2V0Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxFQUFsQjtBQUFBLElBQXNCQyxPQUFPLFVBQTdCOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZQSxJQUFNQywwQkFBMEI7QUFDNUI7QUFDQUMsbUJBRjRCLDZCQUVWO0FBQ2QsZUFBTztBQUNIOzs7O0FBSUFDLHVCQUFXLENBTFI7QUFNSDs7Ozs7QUFLQUMsK0JBQW1CLEtBWGhCO0FBWUg7Ozs7O0FBS0FDLGlDQUFxQjtBQWpCbEIsU0FBUDtBQW1CSCxLQXRCMkI7O0FBdUI1QjtBQUNBQyxlQUFXO0FBQ1BELDZCQUFxQkUsaUJBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QsaUJBQVVFLE1BQVgsRUFBbUJGLGlCQUFVRyxNQUE3QixDQUFwQixDQURkO0FBRVBOLDJCQUFtQkcsaUJBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QsaUJBQVVFLE1BQVgsRUFBbUJGLGlCQUFVRyxNQUE3QixDQUFwQixDQUZaO0FBR1BQLG1CQUFXSSxpQkFBVUUsTUFIZDtBQUlQRSxxQkFBYUosaUJBQVVFLE1BSmhCO0FBS1BHLHFCQUFhTCxpQkFBVUUsTUFMaEI7QUFNUEksdUJBQWVOLGlCQUFVRTtBQU5sQixLQXhCaUI7QUFnQzVCSyx1QkFoQzRCLCtCQWdDUkMsSUFoQ1EsRUFnQ0ZDLE1BaENFLEVBZ0NNO0FBQzlCLGVBQU9ELE9BQVEsZ0JBQWdCQSxJQUFoQixJQUF3QkMsU0FBU0EsTUFBVCxHQUFrQixFQUExQyxDQUFSLEdBQXlELEVBQWhFO0FBQ0gsS0FsQzJCO0FBbUM1QkMseUJBbkM0QixpQ0FtQ05DLFFBbkNNLEVBbUNJQyxJQW5DSixFQW1DVUMsTUFuQ1YsRUFtQ2tCO0FBQzFDLFlBQU1DLGVBQWUsS0FBS1AsbUJBQUwsQ0FBeUJJLFFBQXpCLENBQXJCO0FBQ0EsWUFBTUksV0FBVyxLQUFLUixtQkFBTCxDQUF5QkssSUFBekIsRUFBK0IsTUFBL0IsQ0FBakI7QUFDQSxZQUFNSSxhQUFhLEtBQUtULG1CQUFMLENBQXlCTSxNQUF6QixFQUFpQyxTQUFqQyxDQUFuQjs7QUFFQSxlQUFPcEIsT0FBT3FCLFlBQVAsR0FBc0JDLFFBQXRCLEdBQWlDQyxVQUF4QztBQUNILEtBekMyQjs7QUEwQzVCOzs7O0FBSUFDLDBCQTlDNEIsb0NBOENIO0FBQ3JCLGVBQU8sS0FBS1AscUJBQUwsQ0FBMkIsS0FBS1EsS0FBTCxDQUFXckIsaUJBQXRDLEVBQXlELEtBQUtxQixLQUFMLENBQVd0QixTQUFwRSxFQUErRSxLQUFLc0IsS0FBTCxDQUFXYixXQUExRixDQUFQO0FBQ0gsS0FoRDJCOztBQWlENUI7Ozs7QUFJQWMsNEJBckQ0QixzQ0FxREQ7QUFDdkIsZUFBTyxLQUFLVCxxQkFBTCxDQUEyQixLQUFLUSxLQUFMLENBQVdwQixtQkFBdEMsRUFBNEQsS0FBS29CLEtBQUwsQ0FBV2QsV0FBWCxJQUEyQlosWUFBWSxLQUFLMEIsS0FBTCxDQUFXdEIsU0FBOUcsRUFBMkgsS0FBS3NCLEtBQUwsQ0FBV1osYUFBdEksQ0FBUDtBQUNILEtBdkQyQjs7QUF3RDVCOzs7O0FBSUFjLDhCQTVENEIsd0NBNERDO0FBQ3pCLGVBQVUzQixJQUFWLG1CQUE0QixLQUFLeUIsS0FBTCxDQUFXdEIsU0FBdkM7QUFDSDtBQTlEMkIsQ0FBaEM7O2tCQWlFZUYsdUIiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBHUklEX1NJWkUgPSAxMiwgQ0VMTCA9ICdtZGwtY2VsbCc7XHJcblxyXG4vKipcclxuICogQW4gZXhhbXBsZSBvZiB0aGUgbGFiZWwgYW5kIGNvbnRlbnQgc2l6ZSwgYW5kIG9mIGxhYmVsIGFuZCBjb250ZW50IG9mZnNldCwgd2l0aCBmdW5jdGlvbiBmaWVsZEZvclxyXG4gKiBcclxuICogSSB3YW50IHRvIGhhdmUgdGhlIGxhYmVsIG9uIHRoZSBmaXJzdCByb3cgb2YgdGhlIGdyaWQsIHRoZSBmaWVsZCBvbiB0aGUgc2Vjb25kIG9uZSxcclxuICogd2l0aCBhICdwYWRkaW5nJyAob2Zmc2V0KSBvZiBvbmUgY2VsbCBvbiBlYWNoIHJvdy5cclxuICogXHJcbiAqIGNvbnN0IGZpZWxkT3B0aW9ucyA9IHsgbGFiZWxTaXplOiAxMCwgY29udGVudFNpemU6IDEwLCBsYWJlbE9mZnNldDoxLCBjb250ZW50T2Zmc2V0OjEgfTtcclxuICogLi4uXHJcbiAqIHt0aGlzLmZpZWxkRm9yKCdub20nLCBmaWVsZE9wdGlvbnMpfVxyXG4gKiBcclxuICoqL1xyXG5cclxuY29uc3QgZmllbGRHcmlkQmVoYXZpb3VyTWl4aW4gPSB7XHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgKiBTaXplIG9mIHRoZSBsYWJlbCBpbiB0aGUgZ3JpZCBzeXN0ZW0uXHJcbiAgICAgICAgICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGFiZWxTaXplOiA0LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUE9zaXRpb24gb2YgdGhlIGxhYmVsIGluIHRoZSBjZWxsLlxyXG4gICAgICAgICAgICAgKiBQb3NzaWJsZSB2YWx1ZXM6IHRvcCwgbWlkZGxlLCBib3R0b21cclxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxhYmVsQ2VsbFBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFBvc2l0aW9uIG9mIHRoZSBjb250ZW50IGluIHRoZSBjZWxsLlxyXG4gICAgICAgICAgICAgKiBQb3NzaWJsZSB2YWx1ZXM6IHRvcCwgbWlkZGxlLCBib3R0b21cclxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNvbnRlbnRDZWxsUG9zaXRpb246ICd0b3AnXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHByb3BUeXBlczoge1xyXG4gICAgICAgIGNvbnRlbnRDZWxsUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgICAgICBsYWJlbENlbGxQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgICAgIGxhYmVsU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBjb250ZW50U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBsYWJlbE9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBjb250ZW50T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9LFxyXG4gICAgX2J1aWxkR3JpZENsYXNzTmFtZShwcm9wLCBzdWZmaXgpIHtcclxuICAgICAgICByZXR1cm4gcHJvcCA/ICgnIG1kbC1jZWxsLS0nICsgcHJvcCArIChzdWZmaXggPyBzdWZmaXggOiAnJykpIDogJyc7XHJcbiAgICB9LFxyXG4gICAgX2dldENlbGxHcmlkQ2xhc3NOYW1lKHBvc2l0aW9uLCBzaXplLCBvZmZzZXQpIHtcclxuICAgICAgICBjb25zdCBjZWxsUG9zaXRpb24gPSB0aGlzLl9idWlsZEdyaWRDbGFzc05hbWUocG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGNlbGxTaXplID0gdGhpcy5fYnVpbGRHcmlkQ2xhc3NOYW1lKHNpemUsICctY29sJyk7XHJcbiAgICAgICAgY29uc3QgY2VsbE9mZnNldCA9IHRoaXMuX2J1aWxkR3JpZENsYXNzTmFtZShvZmZzZXQsICctb2Zmc2V0Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiBDRUxMICsgY2VsbFBvc2l0aW9uICsgY2VsbFNpemUgKyBjZWxsT2Zmc2V0O1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgKiBHZXQgdGhlIGxhYmVsIGdyaWRDbGFzcy5cclxuICAgICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgbGFiZWwgZ3JpZFNpemUuXHJcbiAgICAqL1xyXG4gICAgX2dldExhYmVsR3JpZENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Q2VsbEdyaWRDbGFzc05hbWUodGhpcy5wcm9wcy5sYWJlbENlbGxQb3NpdGlvbiwgdGhpcy5wcm9wcy5sYWJlbFNpemUsIHRoaXMucHJvcHMubGFiZWxPZmZzZXQpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgKiBHZXQgdGhlIGNvbnRlbnQgY2xhc3MgTmFtZS5cclxuICAgICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgY29udGVudCBncmlkU2l6ZS5cclxuICAgICovXHJcbiAgICBfZ2V0Q29udGVudEdyaWRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldENlbGxHcmlkQ2xhc3NOYW1lKHRoaXMucHJvcHMuY29udGVudENlbGxQb3NpdGlvbiwgKHRoaXMucHJvcHMuY29udGVudFNpemUgfHwgKEdSSURfU0laRSAtIHRoaXMucHJvcHMubGFiZWxTaXplKSksIHRoaXMucHJvcHMuY29udGVudE9mZnNldCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAqIEdldCB0aGUgY29udGVudCBvZmZzZXQgY2xhc3NOYW1lLlxyXG4gICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBsYWJlbCBncmlkU2l6ZS5cclxuICAgICovXHJcbiAgICBfZ2V0Q29udGVudE9mZnNldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYCR7Q0VMTH0gbWRsLWNlbGwtLSR7dGhpcy5wcm9wcy5sYWJlbFNpemV9LW9mZnNldGA7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWVsZEdyaWRCZWhhdmlvdXJNaXhpbjtcclxuIl19