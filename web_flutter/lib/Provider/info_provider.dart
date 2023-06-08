import 'package:flutter/material.dart';
import "package:http/http.dart" as http;

class InfoProvider extends ChangeNotifier {
  InfoProvider();

  Future<List<String>> getInfo() async {
    var url = "https://script.google.com/macros/s/AKfycbzjE3qDddl-FzwEcHrPS82XWgAJMoVLiJPo-IKCKrV_AM5Vgk9PExih7TuFHaH3XzQ/exec";

    var response = await http.get(Uri.parse(url));

    List<String> info = [];

    info.addAll(response.body.replaceAll("[","").replaceAll("]","").split(","));

    notifyListeners();

    return info;
  }

  Future<String> getURLTemplate() async {
    var url = "https://script.google.com/macros/s/AKfycbwVvFM9miYiWjFPHaMdi8wX_e8Tc6fGw4wmP_lBiY8mH5NFypBN5SqImhOsFTElbukj/exec";
    var response = await http.get(Uri.parse(url));

    var urlTemplate = response.body.replaceAll("\"", "");

    notifyListeners();

    return urlTemplate;
  }
}
