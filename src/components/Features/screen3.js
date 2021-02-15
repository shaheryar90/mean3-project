/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../header/header';
export default class Screen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: 'brown',
      selectedSize: 'Small',
      selectedImage:
        'https://furniturehub.pk/wp-content/uploads/2020/07/designer-sofa-set-500x500-1-1.jpg',
    };
  }

  render() {
    return (
      <View style={{flex: 1, marginBottom: 30}}>
        <View>
          <Header title="Product" navigation={this.props.navigation} />
        </View>
        <ScrollView>
          <View>
            <Image
              source={{
                uri: this.state.selectedImage,
              }}
              style={{width: '100%', height: 200}}
            />
          </View>

          <View style={{marginTop: 30, marginLeft: 20}}>
            <Text style={{fontSize: 20, color: 'red'}}>Habitt</Text>
          </View>
          <View style={{marginTop: 10, marginLeft: 20}}>
            <Text style={{fontSize: 15}}>Sofa Set</Text>
          </View>

          <View style={{marginTop: 10, marginLeft: 20}}>
            <Text style={{fontSize: 20, marginTop: 10}}>Color:</Text>
          </View>
          <View style={styles.View4}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  selectedColor: 'brown',
                  selectedImage:
                    'https://furniturehub.pk/wp-content/uploads/2020/07/designer-sofa-set-500x500-1-1.jpg',
                })
              }
              style={[
                styles.View30,
                {
                  borderWidth: this.state.selectedColor === 'brown' ? 5 : 0,
                },
              ]}></TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  selectedColor: 'black',
                  selectedImage:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIHy5Jcd7t494ynIacbu3tFunA2T1xvdf8A&usqp=CAU',
                })
              }
              style={[
                styles.View31,
                {
                  borderWidth: this.state.selectedColor === 'black' ? 5 : 0,
                },
              ]}
            />
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  selectedColor: 'gray',
                  selectedImage:
                    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIWFRUWFRUVFRUXFRYXFxcVFRUWFhUVFRcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFSsZFR0tKy0tKy0tKysrLS0tLS0rLS0rLS0rKys3NCsrLy0tLSsrKzctKy0tNystLS03Ky0tLf/AABEIAMEBBQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQQFBgIDBwj/xABEEAABAwEFBQQGCAQFBAMAAAABAAIRAwQFEiExBkFRYXEigZGhBxMyscHRIzNCUmJy4fAUkqLxJENjgrJzwsPSFTRT/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGREBAQEBAQEAAAAAAAAAAAAAABEBEiEx/9oADAMBAAIRAxEAPwDtqSUFCqFRKRCAlEpEIFlJKVIgJSShCAlIShCBJWJKUhIQgwetT1uIWDkDKomlUKQqtTOs1QJdB+lHQqelQN1/Wjofcp0K4FlKkSqhUJEqBUyt1SKdQkSA0yJiRvEjRPFHXsfoav5Xe4qCtivZzrSe38tSf+QWTWWc6VKrZ+8wO/4lRWJbKFSHDqFitRJVLNTcThtDOEOa9nsjDqRnonzLA7+HLGuY8mpPZeIIhu8xnloq7S3zrJnrKl3j/DM51HHyj4KoQ3ZWGtN3dn7liaTm6gjqCFro1HDRxHQke5PaVvqj/Md3mfeqjTTSJ8y8nfaDDzLQhBYShBSSqpUIlCIEIQgVJCEIEKEFJKAQSklCBCkSpCgxKxIWyEmFBpLFrdRTrClwqBlZ7LheHdfcn4cscKXCqMgUoWGFZAIMkqwEoxHh4EfGEGai78H+Hq8wfNSWJYOY1wIIBB1BzQc8pWZ53LY6mW5ktyPMnLM5NBPBXNly2cOxiizF96JPcTp3Lc6xN6btyzytUWhQqnNrWvBMiCRrnrEb1M16TxQpN9W6ZeSBBjtGDqp0WADSPclqWcwBGg+KvJVaZSIEkERrIIHjosmqcdTjUO7gVqdRaRLg0ZZ4oy6lII+zUi4mBpG475+SE7aKTB7ZaCSRAeQd2o6JFUTqCkJShAoSShCBUIRCASSlhMrbe1Cj9ZWY08C4Yv5Rn5IHiIVTt+31nZ7DX1OZhjfF2fknWye11O2uewAMqMAdhDsQLCYkGBoYB6hBYoSQs4Ufb76s1H62vTbyLgXfyjPyQPoRCqNs9IVmaYpsqVOcBg/rz8lWrf6T6peWMZTpZSMUvdHIyB5IOpwtNqtdOkJqVGMH43BvvK5BbNqrVUBxWp8cGEMH9ACgX20Zk5k7yZJ6nerB2C3bbWOno91Q8KbT/wAnQ09xUfZvSPZS8NqNdSaTGNxBaOGKNO6VyGreKgr5tuJsSg7qPSXRLsqDyzccTcRH5dPNStj25sdTV7qZ/Gw+9mIDxXny77ecIEqVo3gg9FWO8KNX6qrTf+V7SfAFOSF51ZbBI9/BSdPaOrSEttNVoG4VHR/KTHkkHd0hXI7q9ItrDQXGnUBgjGwh0dWEbuIVisfpIacqtnc3nTeHeTg2PEqC8lYEKCsu2tif/mlh/wBRjm+LgC0eKdXvev8Ag7RWsrm1n06NR7BTIfL2sJaIbMmRogk/FGM/3C85WHbd+LF6yoHHVwe4E8yZzVqu70k1h/nNeOFRoPm2D5oOyYzw8D8D80oqciO6fdK59ZPSSyJq0hAElzH/APa4fFW64L6pWyiK1EktJLYcIIcNQR3jxQSoeDvQWg6gLWSgOQZCg3ghKxyEClCCgBAQlCFhXqtYJe5rRxcQ0eJUVsQFX7dtlY6U/S+sPCm0v/q9nzVdt/pEqEfQUGt4OqOxHrhbA8yrEc/2i2ztTbTaGVqjy0VajWsxFrWYXkBoAgERx4KtWrat32Yb0Uztg9td5tNdoe/7eAYMQyEkN1IA1PBaLufZIBZTA7hKogG17TXPZDjO85DzVx2HdXu99Sv2DUfT9W0kkhjSQ5xw/aJLW66RpmtTrY0DsgBNat4F3xRKk7XtbWr1HMtFV7oOUOwsIOhwNgD9FqNrb9mAqner4c1/+0/D981vZastUVN17fuUDeloMtfOhg9D+wipap/fcmVprYgQgk6dukarXVtai6daGyU3qWiUD6raimNoqSFrxOccgT0W5l21Xbo6lRWNKvCe0LaUyqXdVbunoVoxFuoI6hUWCnbpWu2WguAZ94x81D0qy3trZzwHvRFmoWiAnItsKs07Z+/P4Ley1zvQietF74GmNVque3OIL3Ey85mSOzuHlKrtsql0NB1MKRpVYAHBBI2y5KFQyMnHgSOZJ4qPqbLvAllSeR/ROGWnmt4vCBqghhYLQww5pIOWRneNV6H9G90CzWFjfWMeajnVXOY4ObLobhDhrAaAecrgFrvF7zmcl3r0WOpi76LBUYahxvc0OBcC57iJbMjs4VBbYSFq2QiEVixqFm0JUCQlhCbXnaxRpPqEjssc4AmMRAJDe85IKd6Wb/tNjo0nUHYQ9zmvdHakAFoafs/az1yXJ7NtH60zVBc7e5zi4+Lku2G21stTRStIbgxYgGsDQ10ECNTvOp3qoU3mcvgiL2bzYmlS8dwOX7/f91A0q2SSpX38P2VSJC1WnECCoGx1MDi3gY7tydGvCY2l3bB4+8IJb+JyWv8Aivn8D8FGVLTC0is52TQT0HRQP7VWxCP3O5aBXESijd9V2sN6nPwCeUbkM9o4uWYCCM/iJMDPot1Gx1Xbo6n4BWKzWAN0ZHSP0TyhQBOHQ8CInpOqorjLkJ1dlwA+Mp/QuVg+zPXNS1W0UqeRdJ4NEqPr34fsMA5nM+WQQOGWBo3R5J0Lty4dclWLTeb3AkuJEd3ll5rCpaqh1JMZSSP1hBaXXeImRzzCbVLADunuVZNqeBrw0PzA96c2a9ajPtkcnad2LXuKB9aLkYfsxzGSY1bijRx74UrRvz77AeYy8ipGhaKVQGHQQJIdkY+KCmVLtqt0E9P1TfG5uTgR1CvDqOL2W5cTl5apvWu8nWOgHzQVNtTMHgFvbaVJV7jZzHQ/DRMatyuHsunkf0QZMtPz8c1k6uTvTqx7MVSAajg38IEnvOQHmnzNn2t1LndTHuQQDnGYEk8FMXRYKs4i8tzxCCZaZyIO49E/p2VrNzW+AW51upsGsngEHW7n9IVEsY2u2o1wa0OeAHNcQAC4xmJ10Ks91X3Z7TPqKzKke0Ae0J4tOY8F5nt18Tq4NbwGp+atfobtodeLMEgFlVrp3jAXe9oPcoO/NQhqEVybb3be10rXVo0XBtOnhaYAxElgcTi1GsZRoqzTvk2gy55L94cSXeJ1TD0wYqd41y0kdpjpBjWmw/FVWzXs0wKnZP3wMv8AcBp3Ii3XlYg9pBCrNa5I9kwekj9FJ0LwqRIcHt46+acWe8mlwa8YZ0O6VRAOsFYD2Z6GfLVRteuQSDIPAiDpvC6RhY3VwCi73dZ6gzALh7LozHLohVIZjd7IJTqnddR2pA8SrJRsHAJ42wQJcQBzyQqtULljNwx9+XgVI0m025EYOogdx0T6pbqDMgS88Gj4ppXvicm02xz7XlogkaNjEYso47vFa6ltos34zwaJ81XnW0wWCcIMhozAJ1jcOhK0lzjwb/Uf/UealE1Wvp32GhvP2j8lGWi8XPHtl2Y0zHPP2RlO9aPUTmc+bjI8PZHgsnR192o3lKMXOcdYHTtHxMAeBWLqXHxcZ8AcvALN1Tu/fEpLNQNQxTa6o47mguPfCgb1YOWZ3ToPPNZF/IefzVlo7C2pzQ6qadmbqDVcMR6NB9y2VtjqNMua+0vqPH/50wxgMby8lxjQjCNCqKlUMiIHnuzS044lvmPL5KxM2VYcjXc3n6sO8RiHxSWjZKuM6WG0D/TPbji6k6HeAKQQbaBAlun4TA7wOz5LLE4a8R+E68NPckqtwOwuBY/gZY4dQYKzLieB01yPiFBtpW8tOT3MPOR75apKhfTx7QDxx08CMiomRzHXMeXxCw9RvGXNpjxjIq0Wuz22jUynCTudp3HRNL2rCiQBBdOnAcVXw5w58/ZPlkfJYh5c5xI+7rE5A8ClFgs1/cUXpfvZhmW9zvgOCgIHMLRbz9noEpGVW854laDanuyAKmLouem+O0J4FSFWhSpHDkSOCog7HdDnmXK2bNWoXbVbXphpeAQGukziBacgRGROajDbtzBHPUrUDOZMlQeitiNpP/kLOavq/Vua803NnEJAa4EGBkQ4JFBehdkWKofvWhx8KdMfBCKoPp3s0WzF96lTd/yZ/wCNcpcu8+nK6jUottILfowWPBmS0ulpHSXTPELiFK76r8203RxIgeJ1RGmzVCDkSOhhS1CuXgtcZkZHeCBITQXU9uvkloEse2fvD3oHwtTiBmZj3ZfBa3E7zH74JX5SOZ+B+KwQSFgvl7A5ozIORIzAidEztFvLzmXVDy7Xn7ITRlMF7pAOQOenDpuTkkce4fuEGGJx4N/qPwA80eonWXfmMjw9nyS+s4ADrn+ixJJO8nxUCmAeOmmiX1nAR5n99ylrBsvaawxer9WwavqHA0dZU1ZNnbJSzqvfaHfdb2Kfe45nuCCn02OeYaHOPIElWGxbG2hwDqpZZ2HfVdBP5W6norIy3lgw0KbKDfwN7R6vdJnpCavJcZJJJ1JJJPUlWDXZrlsVHUPtLuf0dPuBBcfBSIvZ7W4aLWUG8KTQ0/zaz0ITOnTkgDUkAdSYClH7N15aGtD8WmE/B0HyTzBHWfE5+Iy8iXmcycOcGdZMDvWiOc8+PMqQqgUpbhIeyowODhDpYccEHQSAcuA1iU1tLQHuw+zJjpuUzbqNUJIWUJtXt1Nmrs+AzP6LSpF1tc4YagbVb92q0PHcT2h3EKMtdx2N4kY7KeIPrKXe09pvdKjLbf2HSGDcXZuPQf3UBar7LjvdzcYHcB+igsVr2OtTWCrTDbRSdJbUomZAMHs9QRHJV6owtdBBa7gQWu+a7f6F+1ZKzTmBXkA7sVNk+4K13tsvZbSCKtFrpnOO0O9SjzLjPI9R8R8UjG6k5SeM7hyXXr69D7DLrNWLODX9pvTkuebQ7MWmwEfxDIYTDajZLCfuzuPLfnwQQ5amds9vvTqo8ASI1HhPAZcdybWtvblFb7MMxqFupHec81qs5Hkfcn1lsxOQGaoxatzQQCYmOmeUwJ6KxXJsjVrEdmBxK6TcGxFKnBcMR56eCImdhrtFksjKWPGc3udEAudnkOQgdyFIVLRQs4DalWnTkdkPe1sgcAShA1vKxYwZzVTvHZ8cPJdBqsTWtZZQcfvG4fwqvW25eS7bbLrB3KuXhcGsBQcXrjtHqMuZ/ssTT4kDkO0fLLxIU9tLstXY8+rpVKgLp7NMujOd2qa0Nm6zvrC2kOBMv/kbJB5OwoIepHXuz8FIXZcFptBilRcR94iB4lW26rLRs7AG0W1H6mrVEn/ayYbHUq03FtY+i6KrQ+mdcLWtc38sAA9D4hWCDuT0S1HQbRUwj7rfmV0G5dhrJZvZpguG85nxKn7vtlOqwVKTg5h3jcd4I3EcCnJP9ws1Y4r6Yb2e2107Ozs06VNr4GQNR5dmeMNDY4SeKqdkvzc4Tz3q2el6lFvnc6hTPm9v/aqDUs4OmXuVzUWyz2hrxLStqpRqPYZGmgI5KTsV/nR4nnvWqLCeRjmMj1Cs1w7ZuoMLatJ9R26s14LyPuua8ACOIOe/PNUqtfFMNBEknd8yoi2367TEGcm+146+5TRcNoL+9dUL6gDAMmkxjcI1fhGcZgawCc1AV76A9hs83ZDw/sqpXvMn2RnxdmfBY3dUZUqRXfA3E+z3xkFM8yYJK23/ACCC8uz9luQ37/7qHrXi86Q0ctfH5QuhULpur1TjWr0TIns1MdTIaUmtJIPQdVz+zXa97sLWuJMw0Al5H5W8lQxInPU8d6zp0HHQEq+XD6OLRWAc4Cm073gl38g+JGq6VcfozstKHPBqu/HGHdAwjLUeanSk9Cg/wlY8a8dYpU/jK6IFH2G7WUmtbTaGNaMLWDINaNwjTTyT7F+5hZVlkkc0aHQ5Ru6FYVHncc+HFKyzkxiy5BxPmUFevPY677SXY7LRxOyLw0NfODDkWwcgcuBAOoBUa30YWICGsMbpMwr21gGg+filWsRzK2eiagTNMhpkGHAuYYOjmgiR3qWurYGlSMuwudMw1uFgkzDGyYA3CTkrsobaelbXU4sTqTXZ4i/2uXq5BaD18lUarfarNYmYq1RtMbgfadG5jBm7uCo1+ekipUltjYKTc/pHgGofytzazvnuVZvm6rVSe59qp1cROdR8vB/3yR5pm2lwVRm573kvqOc97s3OcSSTzJzSLMNSIPQbgsCxbUQo00epCBZm8FvhIiOCX3tfXfXqMquIpY3NaxvZa1ocQA4D2uplZMcCAQZB0hRm11mwWy0s4VqngXkhRNktr6RyzbvafglFslYlyYWa86b9HQeByT0Koe3Xe1WzPx0nQd41a4cHN3+9XS79v6bgBXplh3uYMTOse03oJVADFprWymzUyeAU3KVYfSJdzrfgtFjis5jcFRgMOwZuBDSJBkkQdZy0z5pUDmOLXtLXDItcCD5+9T9Dap1Ko2pSABaQYOjhvaeRGS6/eNy2e10mufTa9rmh7SWyQ1wkYYzGRCzvjX15+JWmpTB5Hl8le9pvR7WpuL7N22k/VnJw/JPtD9yqS9pDixwLXNMOaRBB4EHRM1DS3PLWCDvAnfofkolS9vZiAHMHyPzUpcexlotE4KcAGHOf2QDBMYPaJgcN4VqqvTok6BSl13DVrOAp03PP4RkOrjkF125fRlRa4OqkvADThcRhkGXGGgCNOyZynVX+w3UymA0NAA0AAju3BTojklxejF5g13BoDhiYz2i0HOXkaa6bhkV0a4tjrPZ86VMNOfaBJcWkzDjqYyyPJWMUYGneM3ZcMlsE8O7r3ZLKtTLOBplqs45fr+/khoJ9kHmSC3TKBkOe/wB63U6HEk8t3RWBuZdkBi4iMhuGInhHVb22efa8vn1W8BCsSsWMA0ELJCFoEolCIQIlQhAjmyIOY3jcq/emxdjryTS9W4/apHAfAdk+CsKEHNrX6MqgP0NpBb/qAhw/lkHySrpAchKkYb96VcavS/rTXP0lV0fcb2Wjubr3yVYNmduXMinapc3QVcy4fnH2hz16pCuipCtdKu1zQ5rg5pEggyCOII1WqtWIQcm9KOztVlofamtxUagaXOGeBwAaQ4agE5zpmud1F2/a6yvtFNzC4hrgQRuIO4jeuOXxclWznMFzdx3qCLe1Z2S9qlFwEy07ju5hY4pTa1sylUSlpvV7t6ZlxOvmsWn3D3JQgyaF6L2IqY7vsp1+ha3+SW7h+FedA6F370cUnC77ODkcLiRkZa6o5zZj8JHis6uLLUpg6jPPhpvgqvX5sdZLX9bT7QyD2nC8CNMTd3I8FZo/f6cUYBxPjv0WVUu5PR3ZrKcTCaj4Ax1sLnAgmC0AANyMZAThEqy0LA0QBujdMDQAZabunin8dP04LW6rkemcxz+SDFrc8+o4aboHXzWeIAbv33fotf8ADueNXMn7QDQ4ZzA1B3Cfit9CyNbxJ4n4cFcwa24iTllxB85IjdulbadmGRccRG/TXot6VaiUiEIVQIQhFCEIQCEIQCRCEBKJQhBk1IhqEHBkhaglJKrKTuS/q1kd2DiYTLqbvZPMfdPMd8rpFyX3RtbZYYcPapujEOYzzHNckS0qrmOD2OLXAyHAwQeRCDsdpswO5V+8rmDgcpTXZ7bhr4p2ohrtBV0YfzgeweenRW59IESMwc8t43RxUVxfaHY6CXUsjw3FUu1WdzZa9sFejLXd4duVWvvZJtaQW58YUHF2ZxHD3ZJ5Zrve86d29dFu/wBHLm5Of2cQdGFuKQ0sAxRMQTlxMq43VspSpRDR1VHLrp2Gq1iDm0AggniCCDmDw4Lrl1Wd9IMDiWw3DnBk7u3odTkQM40nOVs9iDdyeCkIgiRwOYU3Kpsx8j2sjwzMRyPMFYVa8AYQXO0iBqBMcp03xlOhW6td1N2rfM7gQI4QHEd63ULMxnstA57/ABOanJTalZnOEObhb+EweuWkpzTs7RBPacI7ToLsu7LuW0JVcyFEIQhVAhCEAhCEUIQhAISIKAQhIgVCEiBZSIQgVpSpGoQcEKAlISFVkjuSEBLCDTUbyUts7tVXsZDfrKM/Vn7PE03fZ6act6ji0n48uvBTF07JWi0QQzAz77uyO7KT1AIPFB0u5b2oWtmOi8GIxMOT2E7nt3ddDGRUh6gKB2a2RpWR3rA4vq4S3Fo0AwSGt5wNSe5WQKK1tohZhoSkIhAQlagpQgEqREIFlAKREoFQkCVFKhIiUCpEJJQKklCAgEIQiBEoQihCEiBZSFIkJRGbUqxZKEVwpyxchCrICEIQS2z3/wBmy/8AUf7guxJUKKUIQhFCAhCBShCEQIQhFCEiECpUiECpEIQCEIQCEIQCEIQCRCEChCRCAQEIQKEiEKI//9k=',
                })
              }
              style={[
                styles.View32,
                {
                  borderWidth: this.state.selectedColor === 'gray' ? 5 : 0,
                },
              ]}></TouchableOpacity>
          </View>

          <View style={{marginTop: 10, marginLeft: 20}}>
            <Text style={{fontSize: 20, marginTop: 10}}>Size:</Text>
          </View>
          <View style={styles.View25}>
            <TouchableOpacity
              onPress={() => this.setState({selectedSize: 'S'})}
              style={[
                styles.button1,
                {
                  backgroundColor:
                    this.state.selectedSize === 'S' ? 'red' : '#c0c0c0',
                },
              ]}>
              <Text style={{color: 'white', fontSize: 15}}>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({selectedSize: 'Small'})}
              style={[
                styles.button1,
                {
                  backgroundColor:
                    this.state.selectedSize === 'Small' ? 'red' : '#c0c0c0',
                },
              ]}>
              <Text style={{color: 'white', fontSize: 15}}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({selectedSize: 'large'})}
              style={[
                styles.button1,
                {
                  backgroundColor:
                    this.state.selectedSize === 'large' ? 'red' : '#c0c0c0',
                },
              ]}>
              <Text style={{color: 'white', fontSize: 15}}>large</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10, marginLeft: 20}}>
            <Text style={{fontSize: 20, marginTop: 10}}>Price:</Text>
          </View>
          <View style={styles.View24}>
            <View style={{marginLeft: 20, marginTop: 10}}>
              <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20}}>
                $ 39000.00
              </Text>
            </View>
          </View>
          <View style={styles.View1}>
            <TouchableOpacity style={styles.Button}>
              <Text style={{color: 'white', fontSize: 17}}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.View1}>
            <TouchableOpacity style={styles.Button}>
              <Text style={{color: 'white', fontSize: 17}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View30: {
    backgroundColor: 'brown',
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 5,
    marginLeft: 20,
    borderColor: 'red',
  },
  View31: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 5,
    borderColor: 'red',
  },
  button1: {
    marginRight: 5,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 5,
    // alignSelf: 'stretch',
    width: 70,
    height: 40,
    borderRadius: 5,
  },
  View32: {
    backgroundColor: 'gray',
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 5,
    borderColor: 'red',
  },
  View4: {
    flexDirection: 'row',
    marginTop: 4,
    paddingLeft: 5,
  },
  View25: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  View24: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  View1: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    backgroundColor: 'red',
    borderRadius: 10,
    // height: 40,
    // width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
    marginHorizontal: 20,
  },
});
